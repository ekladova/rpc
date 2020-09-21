import React from "react";
import "./score.css";

const Score = ({ score1, score2 }) => {
  return (
    <>
      <div className="score-container">
        <div className="boxes">
          <div className="box score-box right">
            <p>{score1}</p>
          </div>
          <div className="box score-box left">
            <p>{score2}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score;
