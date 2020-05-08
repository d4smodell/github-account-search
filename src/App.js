import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { Navbar } from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Alert from "./components/Alert";
import { AlertState } from "./context/alert/alertState";
import { GithubState } from "./context/github/githubState";
require('dotenv').config()

const App = (props) => {
  return (
    <GithubState>
      <AlertState>
        <React.Fragment>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: "test-alert" }} />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" component={() => <About />} />
              <Route path="/profile/:name" component={() => <Profile />} />
            </Switch>
          </div>
        </React.Fragment>
      </AlertState>
    </GithubState>
  );
};

export default App;
