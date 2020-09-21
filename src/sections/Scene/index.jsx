import React, { useEffect, useState } from "react";
import { Score } from "../../components";
import GameScene from "../../components/GameScene";

const Scene = () => {
  const [card, setCard] = useState("");
  const [botCard, setBotCard] = useState("");

  const [roundNum, setRoundNum] = useState(1);

  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const [counter, setCounter] = useState(0);

  const [message, setMessage] = useState("Set your icon");

  const onClick = (event) => {
    if (counter === 0 || card !== event.currentTarget.id) {
      setCard(event.currentTarget.id);
      setCounter(1);
    } else {
      setCard("");
      setCounter(0);
    }
  };

  const clearAll = () => {
    setPlayerScore(0);
    setBotScore(0);
    setCard("");
    setBotCard("");
    setCounter(0);
    setRoundNum(1);
    setMessage("Set your icon");
  };

  const setWinner = (card, botCard) => {
    if (
      (card && botCard && card === "rock" && botCard === "paper") ||
      (card === "paper" && botCard === "scissors") ||
      (card === "scissors" && botCard === "rock")
    ) {
      setBotScore(botScore + 1);
      setCard("");
      setBotCard("");
      setCounter(0);
      setRoundNum(roundNum + 1);
      setMessage("Bot won round " + roundNum);
    } else if (
      (card === "paper" && botCard === "rock") ||
      (card === "scissors" && botCard === "paper") ||
      (card === "rock" && botCard === "scissors")
    ) {
      setPlayerScore(playerScore + 1);
      setCard("");
      setBotCard("");
      setCounter(0);
      setRoundNum(roundNum + 1);
      setMessage("You won round " + roundNum);
    }

    if (botScore === 3) {
      setMessage("Bot Won. Play again?");
      setPlayerScore(0);
      setBotScore(0);
      setCard("");
      setBotCard("");
      setCounter(0);
      setRoundNum(1);
    } else if (playerScore === 3) {
      setMessage("You Won. Play again?");
      setPlayerScore(0);
      setBotScore(0);
      setCard("");
      setBotCard("");
      setCounter(0);
      setRoundNum(1);
    }
  };

  const cards = ["rock", "paper", "scissors"];

  const setBotCardF = () => {
    const pickedCard = cards[Math.floor(Math.random() * 3)];
    setBotCard(pickedCard);
  };

  useEffect(() => {
    if (card !== botCard) {
      setTimeout(() => {
        setWinner(card, botCard);
      }, 500);
    } else if (card && botCard && card === botCard) {
      setTimeout(() => {
        setCard("");
        setBotCard("");
        setCounter(0);
        setRoundNum(roundNum + 1);
        setMessage("Same cards! Try again.");
      }, 500);
    }
    return () => {
      // cleanup;
    };
  }, [card, botCard, roundNum]);

  return (
    <>
      <main className="game-container">
        <div className="round-container">
          <h1 className="roundText">Round {roundNum}</h1>
        </div>
        <Score score1={playerScore} score2={botScore} />
        <div className="player-box">
          <h2>Player 1</h2>
          <h2>Bot</h2>
        </div>
        <div className="message">
          <h2>{message}</h2>
        </div>
        <GameScene
          setBotCardF={setBotCardF}
          counter={counter}
          onClick={onClick}
          card={card}
          botCard={botCard}
          clearAll={clearAll}
          message={message}
        />
      </main>
    </>
  );
};

export default Scene;
