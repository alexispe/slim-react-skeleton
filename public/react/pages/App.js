import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Other from "./Other";

import Header from "../components/app/Header";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/other' component={Other}/>
        </Switch>
      </div>
    );
  }
}
