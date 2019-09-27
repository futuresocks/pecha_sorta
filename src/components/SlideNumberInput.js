import React, { useState, useEffect } from "react";

export default function SlideNumberInput({ numberSelected }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    numberSelected(number);
  }, [number]);

  function handleChange(e) {
    setNumber(e.target.value);
  }

  return (
    <form>
      <input type="number" min="0" value={number} onChange={handleChange} />
    </form>
  );
}
