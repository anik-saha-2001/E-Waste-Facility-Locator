import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./blog.scss";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="blog-container">
        <h1>Effects of E-Waste</h1>
        <div className="article">
          <h2>Environmental Pollution:</h2>
          <p>
            E-waste contains various toxic substances such as lead, mercury,
            cadmium, and brominated flame retardants. When improperly disposed
            of or recycled without adequate safety measures, these toxins can
            leach into the soil and water, causing contamination. This pollution
            can harm ecosystems, disrupt aquatic life, and even enter the food
            chain, posing a risk to human health.
          </p>
        </div>
        <div className="article">
          <h2>Health Risks</h2>
          <p>
            E-waste recycling often takes place in informal and unregulated
            settings, especially in developing countries. Workers, including
            children, are exposed to hazardous materials without proper
            protective gear. Prolonged exposure to these toxins can lead to
            serious health issues, including respiratory problems, neurological
            disorders, developmental delays, and an increased risk of cancer.
            Additionally, nearby communities may also suffer health consequences
            from exposure to airborne pollutants and contaminated water.
          </p>
        </div>
        <div className="article">
          <h2>Resource Depletion</h2>
          <p>
            Electronics contain valuable and finite resources like rare metals
            (e.g., gold, silver, and palladium) and critical minerals (e.g.,
            cobalt, lithium). When e-waste is not properly recycled and valuable
            components are not recovered, it contributes to resource depletion.
            This, in turn, drives up demand for mining and extraction of these
            materials, often in ecologically sensitive areas, leading to habitat
            destruction, ecosystem disruption, and a negative impact on
            biodiversity.
          </p>
        </div>
        <div className="article">
          <h2>More Articles...</h2>
          <p>Tap to see more of the Content...</p>
        </div>
        {/* Add more articles as needed */}
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
