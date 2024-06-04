import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayer, setEnteredPlayer] = useState(null);

  function handleClick() {
    setEnteredPlayer(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "unknown"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
