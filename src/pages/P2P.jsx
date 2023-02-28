import React from "react";
import { compareP2PPossibility, getResultIcon } from "../RPS";

export default function P2P({handleGameMode}) {
  const [gameStatus, setGameStatus] = React.useState("notStarted");
  const [gameResult, setGameResult] = React.useState({
    winner: "",
    player1: "",
    player2: "",
  });

  const startGame = async () => {
    setGameStatus("started");
    const status = await compareP2PPossibility();
    console.log(status);
    setGameResult({
      winner: status[0],
      player1: getResultIcon(status[1]),
      player2: getResultIcon(status[2]),
    });
    setTimeout(() => setGameStatus("stopped"), 900);
  };

  return (
    <div className="p2p__container">
      <h1 className="title">🪨 Rock, 🧻 Paper, ✂️ Scissors</h1>

      <div className="image__container">
        <img
          src={
            gameStatus === "notStarted"
              ? "https://ik.imagekit.io/jckalabs/Screenshot_from_2023-02-28_21-44-41.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677600004558"
              : gameStatus !== "stopped"
              ? "https://ik.imagekit.io/jckalabs/rps.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1677600010961"
              : gameResult.player1
          }
          alt=""
        />
        <img
          src={
            gameStatus === "notStarted"
              ? "https://ik.imagekit.io/jckalabs/Screenshot_from_2023-02-28_21-44-48.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677600004400"
              : gameStatus !== "stopped"
              ? "https://ik.imagekit.io/jckalabs/rps.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1677600010961"
              : gameResult.player2
          }
          alt=""
        />
      </div>

      <div className="game__container">
        <button onClick={() => startGame()}>🎲 Start</button>
        <button onClick={() => handleGameMode("home")}>🛖 Return Home</button>
      </div>
    </div>
  );
}
