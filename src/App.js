import React from "react";
import "./App.css";
import Nav from "./components/Navbar/Nav.js";
import Bio from "./components/Bio/Bio.js";
import Profile from "./components/Profile/Profile.js";
import Projects from "./components/Projects/Projects.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="me">Dallas Lind</h1>
        <Nav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      </header>
      <Profile />
      <Bio />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
