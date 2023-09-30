import "./order.scss"
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useState } from "react";

const Order = () => {
  const [orderData, setOrderData] = useState({
    orderType: "",
    specifications: "",
    ageOfProduct: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    setOrderData({
      ...orderData,
      image: imageFile,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the order data and submit to the backend
    console.log(orderData);
  };
  return (
    <>
      <Navbar />

      <div className="order-page">
        <h2>Place Your E-Waste Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="orderType">Order Type:</label>
            <input
              type="text"
              id="orderType"
              name="orderType"
              value={orderData.orderType}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specifications">Specifications:</label>
            <textarea
              id="specifications"
              name="specifications"
              value={orderData.specifications}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ageOfProduct">Age of Product:</label>
            <input
              type="text"
              id="ageOfProduct"
              name="ageOfProduct"
              value={orderData.ageOfProduct}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Product Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageUpload}
              required
            />
          </div>
          <button type="submit" onClick={()=>{alert("Order Olaced!")}}>Place Order</button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Order;
