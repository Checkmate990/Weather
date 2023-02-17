import React, { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    left: -17,
    width: "100%",
    backgroundColor: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem",
    zIndex: 1,
  };

  const navLinksStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const navLinkStyle = {
    margin: "0 0.5rem",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.2rem",
    textTransform: "uppercase",
  };

  return (
    <nav style={navStyle}>
      <div className="nav-header">
        <button className="toggle-btn" onClick={toggleLinks}>
          <i className={showLinks ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>
      <div className={`nav-links ${showLinks ? "show-links" : ""}`} style={navLinksStyle}>
        <ul>
          <li>
            <a href="/" style={navLinkStyle}>
              Weather
            </a>
          </li>
          <li>
            <a href="/about" style={navLinkStyle}>
              Chat
            </a>
          </li>
          <li>
            <a href="/contact" style={navLinkStyle}>
              Random Fact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
