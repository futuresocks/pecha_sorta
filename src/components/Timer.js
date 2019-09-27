import React, { useState, useEffect } from "react";

export default function Timer({ initialTime, paused }) {
  const [timer, setTimer] = useState(initialTime);

  useEffect(() => {
    if (!paused) {
      setTimeout(() => {
        timer > 1 ? setTimer(timer - 1) : setTimer(initialTime);
      }, 1000);
    }
  }, [timer, paused]);

  return <h1>{timer}</h1>;
}
