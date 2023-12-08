import heroImg from "../assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            obcaecati quidem magni alias voluptate quos ipsum laboriosam
            distinctio quia voluptatum nesciunt animi nisi rem tenetur placeat,
            nam adipisci nulla repellendus.
          </p>
        </div>

        <div className="img-container">
          <img className="img" src={heroImg} alt="heroImg" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
