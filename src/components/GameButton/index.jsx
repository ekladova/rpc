import React from "react";
import "./button.css";

const GameButton = ({ children, className, id, onClick }) => {
  return (
    <>
      <div onClick={onClick} id={id} className="button-container">
        <div className={"image " + className}></div>
        <div className="description">
          <p>{children}</p>
        </div>
      </div>
    </>
  );
};

export default GameButton;
