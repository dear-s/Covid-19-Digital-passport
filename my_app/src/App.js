import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Hospitals from "./Hospitals";
import Users from "./Users";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Covid Tracker App</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/hospitals">Hospitals Portal</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users Portal</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/hospitals" component={Hospitals} />
            <Route path="/users" component={Users} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
