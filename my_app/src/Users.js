import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

class Users extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6 col-md-offset-3">
          <h2>Login</h2>
        </div>
        <form name="form">
          <div>
            <label for="username">Username</label>
            <input name="username" id="username"></input>
          </div>
          <div>
            <label for="password">Password</label>
            <input name="password" id="password"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Users;
