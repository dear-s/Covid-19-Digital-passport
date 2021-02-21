import React, { Component } from "react";
import "./user_dash.css";

class UserDash extends Component {
  covidStatus() {
    var get_status_here = document.getElementById("get_status_here");

    const url = `http://localhost:9000/userportal/${global.username}`;
    const dataa = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);

        var get_status = data[1];
        console.log("getstass: ", get_status);

        if (get_status !== "Vaccinated" || get_status !== "Not Vaccinated") {
          get_status = "Not Vaccinated";
        }
        console.log("getstass: ", get_status);

        get_status_here.innerHTML = `<div id="status_div">${get_status}</div>`;
      })
      .catch((e) => console.log(e));
  }

  seeProfile() {
    var add_up = document.getElementById("add_up");
    const url = `http://localhost:9000/userportal/${global.username}`;
    const dataa = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        // console.log(data.status);

        const {
          address,
          dob,
          first_name,
          last_name,
          passport_no,
          password,
          username,
        } = data[0];

        add_up.innerHTML = `<table>
            <tr id="rowsss">
              <td>Username: </td>
              <td>${username}</td>
            </tr>
            <tr id="rowsss">
              <td>First Name: </td>
              <td>${first_name}</td>
            </tr>
            <tr id="rowsss">
              <td>Last Name: </td>
              <td>${last_name}</td>
            </tr>
            <tr id="rowsss">
              <td>Data of Birth: </td>
              <td>${dob}</td>
            </tr>
            <tr id="rowsss">
              <td>Address: </td>
              <td>${address}</td>
            </tr>
            <tr id="rowsss">
              <td>Passport Number: </td>
              <td>${passport_no}</td>
            </tr>
            <tr id="rowsss">
              <td>Password: </td>
              <td>${password}</td>
            </tr>
          </table>`;
      })
      .catch((e) => console.log(e));
  }

  render() {
    global.username = this.props.match.params.username;
    console.log(global.username);

    //   from id - AKS123424DKJNS
    return (
      <div>
        <h2 id="message">Let's fight Covid-19 together!</h2>
        <h4 id="welcome">Welcome, {global.username}</h4>

        {/* check/show status */}
        {/* click here to see your vaccination status */}

        <button
          onClick={this.covidStatus}
          id="know_button_status"
          className="yellow"
        >
          Click here to know your <br></br>Covid-19 Vaccine Status
        </button>
        <div id="get_status_here"></div>

        <div id="static_table">
          <button id="white_button" onClick={this.seeProfile}>
            Click here to see your profile!!
          </button>
          <div id="add_up">
            <table>
              <tr id="rowsss">
                <td>Username: </td>
                <td></td>
              </tr>
              <tr id="rowsss">
                <td>First Name: </td>
                <td></td>
              </tr>
              <tr id="rowsss">
                <td>Last Name: </td>
                <td></td>
              </tr>
              <tr id="rowsss">
                <td>Data of Birth: </td>
                <td></td>
              </tr>
              <tr id="rowsss">
                <td>Address: </td>
                <td></td>
              </tr>
              <tr id="rowsss">
                <td>Passport Number: </td>
                <td></td>
              </tr>
              <tr id="rowsss">
                <td>Password: </td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDash;
