import { useState } from "react";
import leftarrow from "../assets/left-arrow.png";
import rightarrow from "../assets/right-arrow.png";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

    const nextSlide = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };

  return (
    <div className="carousel">
      <img src={pictures[current]} alt="logement" />

      <img src={leftarrow} alt="Précédent" className="arrow left" onClick={prevSlide}/>
      <img src={rightarrow} alt="Suivant" className="arrow right" onClick={nextSlide}/>
    </div>
  );
}

export default Carousel;