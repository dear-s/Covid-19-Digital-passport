import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import "./users.css";

class Hospitals extends Component {
  render() {
    return (
      <div id="users_body">
        <h1>HOSPITAL LOGIN PORTAL!!!</h1>;
        <div className="box">
          <form action="http://localhost:9000/hospitals" method="POST">
            <span className="text-center">login</span>
            <div className="input-container">
              <input name="hospital_id" type="text" id="hospital_id"></input>
              <label for="hospital_id">Hospital ID</label>
            </div>
            <div className="input-container">
              <input name="password" type="password" id="password"></input>
              <label for="password">Password</label>
            </div>
            <button className="btn">Login</button>
          </form>
        </div>
        <div className="box2">
          <form action="http://localhost:9000/hospitals" method="POST">
            <span className="text-center">Register</span>
            <div className="input-container2">
              <input
                type="text"
                name="hospital_id"
                id="hospital_id"
                required=""
              />
              <label id="make_it_small" for="hospital_id">
                Hospital Id
              </label>
            </div>
            <div className="input-container2">
              <input name="name" type="text" id="name" required="" />
              <label for="name" id="make_it_small">
                Name
              </label>
            </div>
            <div className="input-container2">
              <input name="address" type="text" id="address" required="" />
              <label for="address" id="make_it_small">
                Address
              </label>
            </div>
            <div className="input-container2">
              <input
                name="password"
                type="password"
                id="password"
                required=""
              />
              <label for="password" id="make_it_small">
                Password
              </label>
            </div>

            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Hospitals;
