import React, { Component } from "react";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Projects.css";
import Screen2 from "./images/Screen2.jpg";
import BGM1 from "./images/BGM1.jpg";
import CoTripper from "./images/cotripper.jpg";
import API from "./images/Api.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  onChange = (value) => this.setState({ value });

  render() {
    return (
      <div>
        <h1 className="title"> Projects </h1>
        <Carousel
          arrows
          infinite
          slidesPerPage={1}
          value={this.state.value}
          onChange={this.onChange}
          breakpoints={{
            900: {
              // these props will be applied when screen width is less than 1000px
              slidesPerPage: 1,
              clickToChange: false,
              centered: true,
              arrows: true,
              itemWidth: 100,
            },
            640: {
              slidesPerPage: 1,
              clickToChange: false,
              centered: true,
              infinite: false,
            },
          }}
        >
          <div>
            <img className="pro-image" src={Screen2} />
            <h3 class="name">Halloween Trivia Multiple Choice Game</h3>
            <a href="https://dallaslind.github.io/Halloween_Trivia/Horror_Trivia/">
              <p class="text">Deployed Version Here</p>
            </a>
          </div>
          <div>
            <img className="pro-image" src={BGM1} />

            <h3 class="name">Board Game Meetup App</h3>
            <a href="https://lucid-noether-312707.netlify.app/">
              <p class="text">Deployed Version Here</p>
            </a>
          </div>
          <div>
            <img className="pro-image" src={CoTripper} />
            <h3 class="name">CoTripper App</h3>
            <a href="https://cotripper.netlify.app/">
              <p class="text">Deployed Version Here</p>
            </a>
          </div>
          <div>
            <img className="pro-image" src={API} />
            <h3 class="name">DMV Brewery API</h3>
            <a href="https://dmv-breweries-api.herokuapp.com/">
              <p class="text">Deployed Version Here</p>
            </a>
          </div>
        </Carousel>
        <Dots value={this.state.value} onChange={this.onChange} number={4} />
      </div>
    );
  }
}

export default Projects;
