import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import "./users.css";

class Users extends Component {
  render() {
    return (
      <div id="users_body">
        <div className="box">
          <form action="http://localhost:9000/userportal" method="POST">
            <span className="text-center">login</span>
            <div className="input-container">
              <input
                name="user_username"
                type="text"
                id="user_username"
              ></input>
              <label for="user_username">Username</label>
            </div>
            <div className="input-container">
              <input
                name="user_password"
                type="password"
                id="user_password"
              ></input>
              <label for="user_password">Password</label>
            </div>
            <button className="btn">Login</button>
          </form>
        </div>

        <div className="box2">
          <form action="http://localhost:9000/userportal" method="POST">
            <span className="text-center">Register</span>
            <div className="input-container2">
              <input
                type="text"
                name="user_username"
                id="user_username"
                required=""
              />
              <label id="make_it_small" for="user_username">
                Username
              </label>
            </div>
            <div className="input-container2">
              <input
                name="user_password"
                type="password"
                id="user_password"
                required=""
              />
              <label for="user_password" id="make_it_small">
                Password
              </label>
            </div>
            <div className="input-container2">
              <input
                name="user_first_name"
                type="text"
                id="user_first_name"
                required=""
              />
              <label for="user_first_name" id="make_it_small">
                First Name
              </label>
            </div>
            <div className="input-container2">
              <input
                name="user_last_name"
                type="text"
                id="user_last_name"
                required=""
              />
              <label for="user_last_name" id="make_it_small">
                Last Name
              </label>
            </div>
            <div className="input-container2">
              <input name="user_dob" type="text" id="user_dob" required="" />
              <label for="user_dob" id="make_it_small">
                Date of Birth
              </label>
            </div>
            <div className="input-container2">
              <input
                name="user_passport_no"
                type="text"
                id="user_passport_no"
                required=""
              />
              <label for="user_passport_no" id="make_it_small">
                Passport No
              </label>
            </div>
            <div className="input-container2">
              <input
                name="user_address"
                type="text"
                id="user_address"
                required=""
              />
              <label for="user_address" id="make_it_small">
                Address
              </label>
            </div>
            <button className="btn">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Users;
