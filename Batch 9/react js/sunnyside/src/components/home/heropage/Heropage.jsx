import Header from "../../../static/header/Header";
import "./Heropage.css";
import Arrow from "../../../assets/icon-arrow-down.svg";

const Heropage = () => {
  return (
    <div className="heroContainer">
      <section>
        <Header />
      </section>
      <section className="heroText">
        <h1>We are Creative</h1>
      </section>
      <section className="arrowSection">
        <img src={Arrow} alt="" />
      </section>
    </div>
  );
};

export default Heropage;
