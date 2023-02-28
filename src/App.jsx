import React from "react";
import "./app.css";
import Home from "./pages/Home";
import P2P from "./pages/P2P";

export default function App() {
  const [gameMode, setGameMode] = React.useState("home");

  const handleGameMode = (mode) => {
    setGameMode(mode);
  };

  return (
    <div className="app__container">
      {gameMode === "home" && <Home handleGameMode={handleGameMode} />}

      {gameMode === "p2p" && <P2P handleGameMode={handleGameMode}/>}
    </div>
  );
}
