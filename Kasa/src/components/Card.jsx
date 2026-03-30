import { Link } from "react-router-dom";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <div>
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </div>
    </Link>
  );
}

export default Card;