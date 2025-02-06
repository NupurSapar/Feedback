import React from "react";
import "./Login.css"; // Create a CSS file for styling

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome Back!</h1>
        <p>Please select your role to log in:</p>
        <div className="login-options">
          <a href="/student-login" className="btn-student">Login as Student</a>
          <a href="/teacher-login" className="btn-teacher">Login as Teacher</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
