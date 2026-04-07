import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

function Rating({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? starActive : starInactive}
          alt="star"
          className="star"
        />
      ))}
    </div>
  );
}

export default Rating;