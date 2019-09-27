import React, { useState, useEffect } from "react";

export default function SlideShow({ time, paused }) {
  const [slides, setSlides] = useState([
    "https://images2.minutemediacdn.com/image/upload/c_crop,h_359,w_640,x_0,y_0/f_auto,q_auto,w_1100/v1555005975/shape/mentalfloss/youtube_1.jpg",
    "https://cdn.shopify.com/s/files/1/0799/0083/products/RoboCop2Deluxe_2048x2048.jpg?v=1552521570"
  ]);
  const [currentSlide, setCurrentSlide] = useState(slides[0]);

  const index = slides.indexOf(currentSlide);

  const nextSlide = slides[index + 1];

  useEffect(() => {
    if (!paused) {
      setTimeout(() => {
        setCurrentSlide(nextSlide);
      }, time * 1000);
    }
  }, [currentSlide, paused]);

  return <img src={currentSlide} />;
}
