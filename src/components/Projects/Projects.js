import React, { Component } from "react";
import "./Projects.css";
import Screen2 from "./images/Screen2.jpg";
import BGM1 from "./images/BGM1.jpg";
import CoTripper from "./images/cotripper.jpg";
import API from "./images/Api.jpg";

class Projects extends Component {
  render() {
    return (
      <div className="Projects-Sect">
        <header className="Title">
          <h1 className="Pro">Projects</h1>
        </header>
        <div class="Square">
          <div class="Square-1">
            <div className="Halloween">
              <img src={Screen2} />
              <p>Halloween Horror Trivia</p>
            </div>
          </div>
          <div class="Square-2">
            <div className="BGM">
              <img src={BGM1} />
              <p>Board Game Meetup</p>
            </div>
          </div>
          <div class="Square-3">
            <div className="API">
              <img src={API} />
              <p>DMV Breweries API</p>
            </div>
          </div>
          <div class="Square-4">
            <div className="CoTrip">
              <img src={CoTripper} />
              <p>CoTripper</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
