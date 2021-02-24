import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import "./assets/styles.scss";

import Home from "./pages/Home";
import Generate from "./pages/Generate";
import Navbar from "./components/Navbar";

export default function App() {
  const [user, authLoading] = useAuth();

  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/generate" component={Generate} />
        </Switch>

        {authLoading && (
          <div className="auth-loading-wrapper">
            <div className="spinner-border" />
          </div>
        )}
      </Router>
    </>
  );
}
