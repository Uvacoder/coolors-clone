import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function LoginForm() {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setAuthLoading(true);
    setAuthError("");
    if (tab === "login") {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setAuthLoading(false);
        })
        .catch((error) => {
          setAuthError(error.message);
          setAuthLoading(false);
        });
    } else if (tab === "signup") {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          setAuthLoading(false);
        })
        .catch((error) => {
          setAuthError(error.message);
          setAuthLoading(false);
        });
    }
  };

  return (
    <div className="mx-auto my-5" style={{ maxWidth: 600 }}>
      <div className="px-5 py-4 mx-4 border rounded">
        <div className="d-flex mb-4">
          <h3
            className={`mx-auto ${tab === "login" && "text-primary"}`}
            style={{ cursor: "pointer" }}
            onClick={(e) => setTab("login")}
          >
            Login
          </h3>
          <h3
            className={`mx-auto ${tab === "signup" && "text-primary"}`}
            style={{ cursor: "pointer" }}
            onClick={(e) => setTab("signup")}
          >
            Signup
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="text-muted mb-0">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              placeholder="you@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="text-muted mb-0">
              Password
            </label>
            <input
              className="form-control"
              id="password"
              type="password"
              placeholder="pass1234"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {authError && <p className="text-danger">{authError}</p>}

          <button
            type="submit"
            className="btn btn-primary btn-block text-capitalize"
            disabled={authLoading}
          >
            {authLoading ? "Loading..." : tab}
          </button>
        </form>

        <div className="d-flex align-items-center my-3">
          <div className="bg-dark col" style={{ height: 1 }} />
          <span className="mx-2">OR</span>
          <div className="bg-dark col" style={{ height: 1 }} />
        </div>

        <Link
          to="/generate"
          className="btn btn-success btn-primary btn-block text-capitalize"
        >
          Start Generating Now!
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;
