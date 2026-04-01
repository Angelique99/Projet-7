function Banner({ image, text, overlay = true }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      {overlay && <div className="banner-overlay"></div>}
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default Banner;