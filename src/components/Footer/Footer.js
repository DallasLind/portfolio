import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <p>
          Can Best Be Reached Via LinkedIn or Email at{" "}
          <a href="mailto:mcgraw.dallas@gmail.com">Mcgraw.dallas@gmail.com</a>
        </p>
        <p class="hidden">
          Hi! If you're seeing this, the carousel is still being worked on for
          mobile breakpoints. Please come back again soon to see updates!
        </p>
      </div>
    );
  }
}

export default Footer;
