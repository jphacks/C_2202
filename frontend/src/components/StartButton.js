import React from "react";

const StartButton = ({ text, buttonClick }) => {
  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "#4d638c", color: "#d2d2d2", width: "8rem" }}
        onClick={buttonClick}
      >
        {text}
      </button>
    </div>
  );
};

export default StartButton;
