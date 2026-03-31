import { Link } from "react-router-dom";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card-link">
      <article className="card">
        <img src={logement.cover} alt={logement.title} />
        <h3>{logement.title}</h3>
      </article>
    </Link>
  );
}

export default Card;