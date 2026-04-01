import data from "../data/logements.json";
import Card from "../components/Card";
import Banner from "../components/Banner";
import homeImg from "../assets/homeBanner.png";

function Home() {
  return (
    <>
      <Banner image={homeImg} text="Chez vous, partout et ailleurs" />


      <div className="home">
        {data.slice(0, 6).map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </>
  );
}

export default Home;