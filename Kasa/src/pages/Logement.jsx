import { useParams } from "react-router-dom";
import data from "../data/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Host from "../components/Host";
import Error from "./Error";

function Logement() {
  const { id } = useParams();

  const logement = data.find((item) => item.id === id);

    if (!logement) {
    return <Error />;
  }

  return (
    <div className="logement">
      
      <Carousel pictures={logement.pictures} />

      <div className="logement-header">

        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>

          <div className="tags">
            {logement.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>
        </div>

        <div className="logement-right">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>

      </div>

      <div className="logement-details">
        <Collapse
          title="Description"
          content={<p>{logement.description}</p>}
        />

        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>

    </div>
  );
}

export default Logement;