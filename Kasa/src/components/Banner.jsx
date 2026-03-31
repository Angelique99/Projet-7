import bannerImg from "../assets/homeBanner.png";

function Banner() {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner-overlay"></div>
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;