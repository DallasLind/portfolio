import React from "react";
import { slide as Menu } from "react-burger-menu";
import Resume from "./DallasL-Resume.pdf";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="https://www.linkedin.com/in/dallas-lind/">
        LinkedIn
      </a>

      <a className="menu-item" href="https://github.com/dallasLind">
        GitHub
      </a>

      <a className="menu-item" href={Resume}>
        Resume
      </a>
    </Menu>
  );
};
