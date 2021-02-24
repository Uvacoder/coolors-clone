import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faLock,
  faUnlock,
  faCopy
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../hooks/useAuth";
import { database } from "../firebase";
import colors from "../colors";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const generateRandomColor = () => {
  const randInt1 = getRandomInt(colors.length);
  const randPalette = colors[randInt1];
  const randInt2 = getRandomInt(randPalette.length);
  const randColor = randPalette[randInt2];
  return randColor;
};

const copyToClipboard = (text) => {
  let textField = document.createElement("textarea");
  textField.innerText = text;
  document.body.appendChild(textField);
  textField.select();
  document.execCommand("copy");
  textField.remove();
};

function Generate({ location }) {
  const [user] = useAuth();
  const [key, setKey] = useState(null);
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentColors, setCurrentColors] = useState([{}, {}, {}, {}]);
  const [isShowNoti, setIsShowNoti] = useState(false);
  const [notiText, setNotiText] = useState("");

  const showNoti = (text = "Done!", duration = 1500) => {
    setNotiText(text);
    setIsShowNoti(true);
    setTimeout(() => {
      setIsShowNoti(false);
      setNotiText("");
    }, duration);
  };

  const copyToClipboard = (text) => {
    let textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
    showNoti("Copied!");
  };

  const addPalette = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsLoading(true);
    await database.ref(`userColors/${user.uid}`).push({
      name: name.trim(),
      colorSet: currentColors
    });
    setIsLoading(false);
    showNoti("Saved!", 2500);
  };

  const updatePalette = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setIsLoading(true);
    await database.ref(`userColors/${user.uid}/${key}`).set({
      name: name.trim(),
      colorSet: currentColors
    });
    setIsLoading(false);
    showNoti("Updated!", 2500);
  };

  const setRandomColors = () => {
    let newColors = [];
    [...currentColors].forEach((color) => {
      newColors.push(color.isLocked ? color : generateRandomColor());
    });
    setCurrentColors(newColors);
  };

  useEffect(() => {
    if (location.state) {
      const { palette } = location.state;
      setKey(palette.key);
      setCurrentColors(palette.colorSet);
      setName(palette.name);
    } else {
      setRandomColors();
    }
    return () => {};
  }, []);

  return (
    <>
      <div className={`noti ${isShowNoti}`}>
        <span>{notiText}</span>
      </div>

      <div
        className="d-flex align-items-strech"
        style={{ height: "70vh", overflow: "hidden" }}
      >
        {currentColors.map((color, index) => (
          <div
            key={`${color.hex}-${index}`}
            className="col d-flex flex-column align-items-center justify-content-end py-5"
            style={{
              backgroundColor: color.hex,
              position: "relative"
            }}
          >
            <div
              className="text-dark py-05 px-2 rounded my-2 color-button"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
              onClick={() => copyToClipboard(color.hex)}
            >
              <FontAwesomeIcon icon={faCopy} />
            </div>
            <div
              className="text-dark py-05 px-2 rounded my-2 color-button"
              onClick={() => {
                let newColors = [];
                currentColors.forEach((color, ind) => {
                  if (ind !== index) {
                    newColors.push(color);
                  } else {
                    newColors.push({ ...color, isLocked: !color.isLocked });
                  }
                });
                setCurrentColors([...newColors]);
              }}
            >
              <FontAwesomeIcon icon={color.isLocked ? faLock : faUnlock} />
            </div>
            <div
              className="text-dark py-1 px-3 rounded my-2"
              style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
            >
              {color.hex}
            </div>
            <div className="add-btn-wrapper">
              <div
                className="add-btn"
                onClick={() => {
                  if (currentColors.length > 7) return;
                  let colors = [...currentColors];
                  colors.splice(index + 1, 0, generateRandomColor());
                  setCurrentColors(colors);
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="btn btn-primary btn-block" onClick={setRandomColors}>
        Generate
      </button>

      {user ? (
        <form className="my-4" onSubmit={addPalette}>
          <div className="d-flex align-items-center justify-content-center">
            <input
              className="form-control ml-3 mr-2"
              placeholder="Palette name"
              style={{ maxWidth: 240 }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <button
              type="submit"
              className="btn btn-primary mr-3 ml-2"
              disabled={isLoading}
            >
              Save
            </button>
            {key && (
              <button
                className="btn btn-primary mr-3"
                disabled={isLoading}
                onClick={updatePalette}
              >
                Update
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="my-4">
          <h5 className="text-muted text-center">
            You need to be logged in to save
          </h5>
        </div>
      )}
    </>
  );
}

export default Generate;
