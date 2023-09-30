import Navbar from "../../Components/Navbar/Navbar";
import "./products.scss";
import { products } from "../../data";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Products = () => {
  return (
    <>
      <Navbar />
      
      <div className="product-page">
        <div className="heading">
          <h1>Available Products</h1>
          <Link to="/products/new" >
          <button>Add New</button>
          </Link>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <p>Estimated Credits: {product.credits}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
