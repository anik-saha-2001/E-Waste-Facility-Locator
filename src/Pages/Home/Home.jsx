import { stepsData } from "../../data";
import Map from "../../Components/Map/Map";
import Navbar from "../../Components/Navbar/Navbar";
import "./home.scss";
import About from "../../Components/About/About";
import Partnership from "../../Components/Partnership/Partnership";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works-content">
          {stepsData.map((step) => (
            <div className="how-it-works-step" key={step.id}>
              <div className="how-it-works-image">
                <img src={step.image} alt={`Step ${step.id}`} />
              </div>
              <div className="how-it-works-text">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <h2>Nearest E-Waste Facilities</h2>
      <div className="map-container">
        <Map />
      </div>

      <About />

      <Partnership />

      <Footer />
    </div>
  );
};

export default Home;
