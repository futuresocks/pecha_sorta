import React, { useState } from "react";
import "./App.css";
import ImageUpload from "./components/ImageUpload";
import SlideNumberInput from "./components/SlideNumberInput";
import SlideShow from "./components/SlideShow";
import Timer from "./components/Timer";

export default function App() {
  const [imgUrls, setImgUrls] = useState([]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [paused, setPaused] = useState(false);

  function addImgUrl(url) {
    setImgUrls([...imgUrls, url]);
  }

  function numberSelected(number) {
    setSlideNumber(number);
  }

  function togglePaused() {
    paused ? setPaused(false) : setPaused(true);
  }

  const buttonText = paused ? "Resume" : "Pause";

  return (
    <div className="App">
      <SlideNumberInput numberSelected={numberSelected} />
      <ImageUpload addImgUrl={addImgUrl} />
      <Timer initialTime={20} paused={paused} />
      <button onClick={togglePaused}>{buttonText}</button>
      <SlideShow slides={imgUrls} time={20} paused={paused} />
    </div>
  );
}
