import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">TeacherFeedback</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <Link to="/Login" className="btn-login">Login</Link> {/* Using Link instead of <a> */}
        </nav>
      </header>

      {/* Remaining sections */}
    </div>
  );
};

export default LandingPage;
