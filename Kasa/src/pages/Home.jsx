import data from "../data/logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";

function Home() {
  return (
    <>
      <Banner />

      <div className="home">
        {data.slice(0, 6).map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </>
  );
}

export default Home;