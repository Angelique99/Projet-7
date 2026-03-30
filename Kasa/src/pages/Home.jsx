import data from "../data/logements.json";
import Card from "../components/Card";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      {data.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}

export default Home;