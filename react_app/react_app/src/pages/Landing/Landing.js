import React from "react";
import { SIGN_IN_PAGE, SIGN_UP_PAGE } from "../../constants/routes";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container-wrapper">
      <div className="landing-container">
        <div className="landing-container-header">
          <h1>Welcome to Movie Nights</h1>
        </div>
        <div className="landing-container-content">
          <p>
            Here you can find information about the best movies available for your
            entertainment.
            Before continuing, please sign in or sign up to fully enjoy the experience.
          </p>
        </div>
        <div className="landing-container-actions">
        <button className="action-button" onClick={() => navigate(SIGN_IN_PAGE)}>Sign in</button>
        <button className="action-button" onClick={() => navigate(SIGN_UP_PAGE)}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
