import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { database } from "../firebase";
import useAuth from "../hooks/useAuth";

function Home({ history }) {
  const [user] = useAuth();
  const [userColors, setUserColors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState("");

  const loadColors = async () => {
    setIsLoading(true);
    setUserColors(null);
    const data = await database
      .ref(`userColors/${user.uid}`)
      .once("value")
      .then((snap) => (snap.exists() ? snap.val() : {}));
    const newData = Object.entries(data).map((item) => ({
      key: item[0],
      ...item[1]
    }));
    setUserColors(newData);
    setIsLoading(false);
  };

  const onClickDelete = async (item) => {
    setIsDeleting(item.key);
    await database.ref(`userColors/${user.uid}/${item.key}`).remove();
    setIsDeleting("");
    loadColors();
  };

  useEffect(() => {
    if (!user) return;

    loadColors();
  }, [user]);

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div className="mx-3 my-4">
      <div className="d-flex align-items-center mb-3">
        <h5 className="mb-0">Your Paletts</h5>
        {userColors && userColors.length !== 0 && (
          <Link to="/generate" className="ml-auto">
            Generate new
          </Link>
        )}
      </div>

      {isLoading && (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" />
        </div>
      )}

      {userColors && userColors.length === 0 && (
        <div className="d-flex flex-column align-items-center my-5">
          <img
            src={require("../assets/no_data.svg").default}
            style={{
              width: "100%",
              height: 170,
              objectFit: "contain",
              objectPosition: "center"
            }}
          />
          <h4 className="text-muted text-center mt-4 mb-3">
            You don't have any saved paletts.
          </h4>
          <Link to="/generate" className="btn btn-primary">
            Start generating!
          </Link>
        </div>
      )}

      {userColors && userColors.length > 0 && (
        <div className="d-flex flex-wrap">
          {userColors.map((palette) => (
            <div
              key={palette.key}
              className="card m-2"
              style={{ width: 220, cursor: "pointer", userSelect: "none" }}
              onClick={() => {
                history.push({
                  pathname: "/generate",
                  state: {
                    palette
                  }
                });
              }}
            >
              <div className="card-img-top d-flex" style={{ height: 100 }}>
                {palette.colorSet.map((color) => (
                  <div style={{ flex: 1, backgroundColor: color.hex }} />
                ))}
              </div>
              <div className="mx-3 my-2 d-flex">
                <div className="text-truncate" style={{ flex: 1 }}>
                  {palette.name}
                </div>
                <button
                  className="btn btn-danger p-1"
                  disabled={isDeleting}
                  onClick={(e) => {
                    e.stopPropagation();
                    onClickDelete(palette);
                  }}
                >
                  {isDeleting === palette.key ? (
                    <div
                      className="spinner-border spinner-border-sm"
                      role="status"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faTrash} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
