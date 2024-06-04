import { useState } from "react";

export default function Player() {
  const [enteredPlayer, setEnteredPlayer] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayer(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayer : "unknown"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayer} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
