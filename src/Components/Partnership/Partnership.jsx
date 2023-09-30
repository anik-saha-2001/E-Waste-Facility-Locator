import './partnership.scss';
import { partners } from '../../data';

const Partnership = () => {

  return (
    <section className="partnerships">
      <h2>Our Partners</h2>
      <div className="partnership-cards">
        {partners.map((partner) => (
          <div className="partnership-card" key={partner.id}>
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partnership;