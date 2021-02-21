import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 style={{ fontSize: "30px", marginLeft: "80px" }}>
          Digital Covid-19 Passport
        </h2>

        <ul>
          <li>Identify yourself being vaccinated and enjoy some privileges</li>
          <li>Verify your vaccination status online</li>
          <li>Easy access while traveling during Covid</li>
        </ul>

        <div>
          <h3>Working of this website/project?</h3>
          <ul>
            <li>We have developed 2 portals: Users and Hospitals</li>
            <li>Users can read their status</li>
          </ul>
        </div>

        <h3>Motive:</h3>
        <ul>
          <li>
            Users can have their status verified from the centralized database
            and can access it whenever and wherever they want.
          </li>
        </ul>

        <h3>Future Scope</h3>
        
      </div>
    );
  }
}

export default Home;
