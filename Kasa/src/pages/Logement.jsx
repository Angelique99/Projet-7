import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Carousel from "../components/Carousel";

function Logement() {
  const { id } = useParams();

  const logement = data.find((item) => item.id === id);

  return (
    <div>
      <Carousel pictures={logement.pictures} />
    </div>
  );
}

export default Logement;