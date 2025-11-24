import "./HomeOne.css";
import EggImage from "../../../assets/desktop/image-transform.jpg";

const HomeOne = () => {
  return (
    <div className="homeOneContainer">
      <section className="textSection">
        <div className="textItems">
          <h2>Tranform Your Brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section className="eggSection">
        <img src={EggImage} alt="" />
      </section>
    </div>
  );
};

export default HomeOne;
