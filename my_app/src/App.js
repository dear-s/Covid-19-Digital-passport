import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Hospitals from "./Hospitals";
import Users from "./Users";
import HosDash from "./Hospital_dashboard";
import UserDash from "./User_dashboard";
import img from "../src/img_home.jpeg";
import img2 from "../src/img_user.jpeg";
import img3 from "../src/img_hospital.jpeg";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <table className="header_table">
            <tr>
              <td>
                <div className="Home_row">
                  <img src={img}></img>
                </div>
              </td>
              <td>
                <div className="Home_row">
                  <img src={img2}></img>
                </div>
              </td>
              <td>
                <div className="Home_row">
                  <img src={img3}></img>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <NavLink className="link1" to="/">
                  Home
                </NavLink>
              </td>
              <td>
                <NavLink className="link2" to="/users">
                  Users Portal
                </NavLink>
              </td>
              <td>
                <NavLink className="link3" to="/hospitals">
                  Hospital Portal
                </NavLink>
              </td>
            </tr>
          </table>

          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/hospitals" component={Hospitals} />
            <Route path="/users" component={Users} />
            <Route path="/hospitalportal/:id" component={HosDash} />
            <Route path="/userportal/:username" component={UserDash} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
