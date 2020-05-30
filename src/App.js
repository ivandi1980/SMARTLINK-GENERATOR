import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Download from "./components/Download";

const { app } = window.require("electron").remote;

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <div className="container">
            <Route exact path="/" render={() => <Content />} />
            <Route path="/download" render={() => <Download />} />
          </div>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
