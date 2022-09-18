import React from "react";
import landing from "../Images/landing.jpg";
import "./landing_page.css";
import { Link } from "react-router-dom";

function Landing_page() {
  return (
    <div className="home">
      <div className="left">
        <img src={landing} alt="landing page" />
      </div>

      <div className="right">
        <h1>10x Team GID</h1>
        <Link to="/postview">
          <button id="btn1">Enter</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing_page;
