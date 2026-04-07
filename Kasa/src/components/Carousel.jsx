import { useState } from "react";
import leftarrow from "../assets/left-arrow.png";
import rightarrow from "../assets/right-arrow.png";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(prev =>
      prev === pictures.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent(prev =>
      prev === 0 ? pictures.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel">
      <img src={pictures[current]} alt="logement" />

      {pictures.length > 1 && (
        <>
          <img
            src={leftarrow}
            alt="Précédent"
            className="arrow left"
            onClick={prevSlide}
          />

          <img
            src={rightarrow}
            alt="Suivant"
            className="arrow right"
            onClick={nextSlide}
          />

          <p className="carousel-counter">
            {current + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  );
}

export default Carousel;