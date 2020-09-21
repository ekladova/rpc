import React from "react";
import { GameButton } from "..";
import "./gamescene.css";

const GameScene = ({
  card,
  botCard,
  onClick,
  counter,
  setBotCardF,
  clearAll,
}) => {
  return (
    <>
      <div className="game-scene-container">
        <div className="boxes">
          <div className="box game-box player1box">
            <div id="player" className="display-card">
              <div className={"image " + card}></div>
            </div>
          </div>

          <div id="bot" className="box game-box player2box">
            <div className={"image " + botCard}></div>
          </div>
        </div>
      </div>
      <div className="set-clear-buttons">
        <button
          className="box set-button"
          disabled={counter === 0 ? true : false}
          onClick={setBotCardF}
        >
          Set
        </button>
        <button className="box set-button" onClick={clearAll}>
          Clear
        </button>
      </div>

      <div className="buttons-container">
        <GameButton onClick={onClick} id="rock" className="rock">
          Rock
        </GameButton>
        <GameButton onClick={onClick} id="paper" className="paper">
          Paper
        </GameButton>
        <GameButton onClick={onClick} id="scissors" className="scissors">
          Scissors
        </GameButton>
      </div>
    </>
  );
};

export default GameScene;
