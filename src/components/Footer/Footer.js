import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <section>
      <hr />
      <div className="container">
        <div className="row">
          <div className="column">
            <h2>About Us</h2>
            <a href="#">Vision</a>
            <a href="#">News</a>
            <a href="#">Events</a>
            <a href="#">Press Releases</a>
            <a href="#">Careers</a>
          </div>
          <div className="column">
            <h2>Products</h2>
            <a href="#">Shelters</a>
            <a href="#">V.A.T.S.</a>
            <a href="#">G.E.C.K.</a>
            <a href="#">N.A.P.P.</a>
            <a href="#">C.A.M.P.</a>
            <a href="#">Promotional</a>
          </div>
          <div className="column">
            <h2>Services</h2>
            <a href="#">Survival Guide</a>
            <a href="#">Vaults</a>
            <a href="#">Shop-Tec</a>
            <a href="#">Future-Tec</a>
          </div>
          <div className="column">
            <h2>Contact Us</h2>
            <a href="#">Customer Service</a>
            <a href="#">Vault Service</a>
            <a href="#">Special Projects</a>
            <a href="#">Vault-Tec Security</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
