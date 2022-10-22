import React from "react";

import "../styles/menuBar.css";

const MenuBar = () => {
  return (
    <div>
      {/* <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
      <nav className="navbar navbar-dark bg-dark justify-content-center">
        <span className="navbar-brand mb-0 h1" style={{ color: "#d2d2d2" }}>
          HYOKA
        </span>
      </nav>
    </div>
  );
};

export default MenuBar;
