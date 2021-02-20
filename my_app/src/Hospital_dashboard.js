import React, { Component } from "react";
import { Link } from "react-router-dom";

class Hospitals extends Component {
  myFunction1() {
    var demo = document.getElementById("demo");
    //   fetch hospital profile data
    demo.innerHTML = "first buttonnnnn";
  }

  myFunction2() {
    var demo = document.getElementById("demo");
    demo.innerHTML = "second buttonnnnn";
  }

  render() {
    return (
      <div>
        <h2>Let's fight covid-19 together!</h2>
        {/* fetch hospital id value */}
        <h4>Welcome Hospital-id: lkfnvdnvd (insert)</h4>

        {/* 2 toggle buttons/switches */}
        <button onClick={this.myFunction1}>View Profile</button>
        <button onClick={this.myFunction2}>Add Data</button>

        {/* lets make some fake data then come here - sanya */}

        <div id="demo"></div>
      </div>
    );
  }
}

export default Hospitals;
