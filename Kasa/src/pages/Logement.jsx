import { useParams } from "react-router-dom";
import data from "../data/logements.json";

function Logement() {
  const { id } = useParams();

  const logement = data.find((item) => item.id === id);

  if (!logement) return <h1>Logement non trouvé</h1>;

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
    </div>
  );
}

export default Logement;