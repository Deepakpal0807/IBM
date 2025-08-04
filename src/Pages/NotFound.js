import React from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Notfound.css";

function NotFound() {
  const location = useLocation();

  return (
    <div className="not-found-container">
      <div className="not-found-box">
        <h1 className="not-found-title">404 - Page Not Found</h1>
        <p className="not-found-message">
          The requested URL <span>{location.pathname}</span> was not found on this server.
        </p>
        <a href="/" className="not-found-link">Go to Homepage</a>
      </div>
    </div>
  );
}

export default NotFound;
