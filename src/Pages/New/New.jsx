import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./new.scss";
import Map from "../../Components/Map/Map";
import Footer from "../../Components/Footer/Footer";

const New = () => {
  const [formData, setFormData] = useState({
    photo: null,
    deviceType: "",
    age: "",
    // Add more relevant fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submission logic here
    console.log("E-waste data submitted:", formData);
  };

  return (
    <div className="New">
      <Navbar />

      <div className="ewaste-submission-container">
        <h2>Add E-Waste Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="deviceType">Device Type:</label>
            <input
              type="text"
              id="deviceType"
              name="deviceType"
              placeholder="Type of Device"
              value={formData.deviceType}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              placeholder="Age of Device"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Upload E-Waste Photo:</label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          {/* Add more form fields for other relevant information */}
          <button type="submit">Submit</button>
        </form>
      </div>

      <h2>Choose the E-Waste Collection Facility near you</h2>

      <div className="map-container">
        <Map />
      </div>

      <Footer />
    </div>
  );
};

export default New;
