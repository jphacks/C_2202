import React from "react";

const StartButton = (props) => {
  const { text, onClick, type, width } = props;
  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "#4d638c", color: "#d2d2d2", width: width }}
        onClick={onClick}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};

export default StartButton;
