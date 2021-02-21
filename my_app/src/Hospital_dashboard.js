import React, { Component } from "react";
import "./hosp_dash.css";

class Hospitals_Dash extends Component {
  myFunction1() {
    var demo = document.getElementById("demo");

    // fetch hospital profile data - using global.id - get data from API
    // const [notes, getNotes] = useState("");
    console.log("check connection");
    const url = `http://localhost:9000/hospitalportal/${global.id}`;
    const dataa = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        global.hospital_id = data.hospital_id;
        global.name = data.name;
        global.address = data.address;
        global.password = data.password;

        demo.innerHTML = `<div id="table_div"><table id="data_table"><tr><td id="rows" class = "parameters">Hospital Name: </td><td id="rows" class="values">${global.name}</td></tr><tr><td id="rows" class="parameters">Hospital Id: </td><td id="rows" class="values">${global.hospital_id}</td></tr><tr><td id="rows" class="parameters">Hospital Address: </td><td id="rows" class="values">${global.address}</td></tr><tr><td id="rows" class="parameters">Hospital Password: </td><td id="rows" class="values">${global.password}</td></tr></table></div>`;
      })
      .catch((e) => console.log(e));
  }

  myFunction2() {
    var demo = document.getElementById("demo");
    demo.innerHTML = `<form class="form_class" action='http://localhost:9000/hospitalportal/${global.id}' method="POST">
          <div id="rows">
            <label id="label1" for="passport_no">Passport No.</label>
            <input name = "passport_no" id="passport_no"></input>
          </div>
          <div id="ro
          ws">
            <label id="label2" for="status">Status</label>
            <select name="status" id="status">
              <option value="vaccinated">Vaccinated</option>
              <option value="not_vaccinated">Not Vaccinated</option>
            </select>
          </div>
          <div>
            <button id="add_button">Add to the database!</button>
          </div>
        </form>`;
  }

  myFunction3() {
    var demo = document.getElementById("demo");
    demo.innerHTML = `<div id="head_div"><span id="first_col_head">Passport Number</span><span id="second_col_head">Vaccination Status</span></div><br>`;

    // console.log("check connection - 3 function");
    const url = `http://localhost:9000/hospitals/view_db`;
    const dataa = fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        for (var i = 0; i < 10; i++) {
          global.passport_no = data[i]["passport_no"];
          global.status = data[i]["status"];

          demo.innerHTML += `<div id="rows_dataa"><span id="first_col">${global.passport_no}</span><span id="second_col">${global.status}</span><div><br>`;
        }
      })
      .catch((e) => console.log(e));
  }

  render() {
    global.id = this.props.match.params.id;
    console.log("global.id: ", global.id);

    //   from id - AKS123424DKJNS
    return (
      <div>
        <h2 id="make_left">Let's fight Covid-19 together!</h2>
        {/* fetch hospital id value */}
        <h4 id="welcome">Welcome, {global.id}</h4>

        {/* 2 toggle buttons/switches */}
        <div id="two_buttons_div">
          <div id="buttons_data">
            <button id="btn1" onClick={this.myFunction1}>
              View Profile
            </button>
            <button id="btn2" onClick={this.myFunction2}>
              Add Data to the Database
            </button>
            <button id="btn3" onClick={this.myFunction3}>
              View database
            </button>
          </div>
        </div>

        <div id="demo">
          <div id="table_div">
            <table id="data_table">
              <tr>
                <td id="rows" className="parameters">
                  Hospital Name:
                </td>
                <td id="rows">{global.name}</td>
              </tr>
              <tr>
                <td id="rows" className="parameters">
                  Hospital Id:
                </td>
                <td id="rows">{global.hospital_id}</td>
              </tr>
              <tr>
                <td id="rows" className="parameters">
                  Hospital Address:
                </td>
                <td id="rows">{global.address}</td>
              </tr>
              <tr>
                <td id="rows" className="parameters">
                  Hospital Password:
                </td>
                <td id="rows">{global.password}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Hospitals_Dash;
