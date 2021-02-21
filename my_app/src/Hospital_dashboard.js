import React, { Component } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

class Hospitals extends Component {
  myFunction1() {
    var demo = document.getElementById("demo");

    // fetch hospital profile data - using global.id - get data from API
    // const [notes, getNotes] = useState("");
    console.log("check connection");
    const url = `http://localhost:9000/hospitals/${global.id}`;
    const dataa = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        global.hospital_id = data.hospital_id;
        global.name = data.name;
        global.address = data.address;
        global.password = data.password;

        demo.innerHTML = `<table><tr><td>Hospital Name: </td><td>${global.name}</td></tr><tr><td>Hospital Id: </td><td>${global.hospital_id}</td></tr><tr><td>Hospital Address: </td><td>${global.address}</td></tr><tr><td>Hospital Password: </td><td>${global.password}</td></tr</table>`;
      })
      .catch((e) => console.log(e));
  }

  myFunction2() {
    var demo = document.getElementById("demo");
    demo.innerHTML = `<form action='http://localhost:9000/hospitals/${global.id}' method="POST">
          <div>
            <label for="passport_no">Passport No.</label>
            <input name = "passport_no" id="passport_no"></input>
          </div>
          <div>
            <label for="status">Status</label>
            <select name="status" id="status">
              <option value="vaccinated">Vaccinated</option>
              <option value="not_vaccinated">Not Vaccinated</option>
            </select>
          </div>
          <div>
            <button>Add to the database!</button>
          </div>
        </form>`;
  }

  render() {
    global.id = this.props.match.params.id;
    console.log("global.id: ", global.id);

    //   from id - get other params

    return (
      <div>
        <h2>Let's fight covid-19 together!</h2>
        {/* fetch hospital id value */}
        <h4>Welcome, {global.id}</h4>

        {/* 2 toggle buttons/switches */}
        <button onClick={this.myFunction1}>View Profile</button>
        <button onClick={this.myFunction2}>Add Data to the Database</button>

        {/* lets make some fake data then come here - sanya */}

        <div id="demo"></div>
      </div>
    );
  }
}

export default Hospitals;
