import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} E-Waste Locator. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;