import React, { Component } from "react";
import "./Profile.css";
import Pic from "./pic.png";

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="row">
          <img className="image" src={Pic} />
        </div>
        <div id="title">
          <h1>Full-Stack Engineer</h1>
        </div>
        <h2>Washington, D.C.</h2>
      </div>
    );
  }
}

export default Profile;
