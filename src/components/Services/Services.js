import React from "react";
import "./Services.css";
import { 
  FaCertificate,
  FaFaucet,
  FaInfinity,
  FaCrown,
  FaShieldAlt,
  FaPlusSquare
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="main">
      <hr />
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="card_icon">
              <FaCertificate size={60} />
            </div>
            <div className="card_content">
              <h2 className="card_title">
                Safety
              </h2>
              <p className="card_text">
                Our Vaults are built specifically to 
                provide the maximum amount of comfort to 
                the inhabitants without compromising their
                safety. All Vaults are built with reinforced
                concrete and solid metal sheeting, with 
                an extra layer of protection in the sheer
                amount of earth above each Vault. 
              </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_icon">
              <FaInfinity size={60} />
            </div>
            <div className="card_content">
              <h2 class="card_title">
                Surivability
              </h2>
              <p className="card_text">
                Each Vault entrance is controlled by a blast
                door and an airlock, with a projected 2%
                failure rate in case of a direct hit 
                by a nuclear missile. Within each Vault are 
                state of the art facilities, inluding 
                living quarters, rec rooms, diners, 
                cafeterias, classroms, laundry rooms, 
                lounges, medical and scientific labs, 
                and business offices. 
              </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_icon">
              <FaFaucet size={60} />
            </div>
            <div className="card_content">
              <h2 className="card_title">
                Sanitation
              </h2>
              <p className="card_text">
              All entry points into our Vaults are 
              overpressurized to keep contaminants out.
              All inhabitants will be decontaminated before
              being registered with 
              a unique 11 digit Vault identification 
              number and provided with 
              clothing, bedding, and other accommodations 
              necessary for your future life within the 
              Vault. This ensures that there will be 
              no contamination from the surface. 
              </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_icon">
              <FaPlusSquare size={60} />
            </div>
            <div className="card_content">
              <h2 className="card_title">
                Health
              </h2>
              <p className="card_text">
              Your health will be assured by 
              well-educated doctors with access to the 
              latest in medical technologies. Auto-Docs 
              capable of performing a broad variety 
              of procedures and manufacturing medical
              drugs are standard issue of the Vault 
              Emergency Medical Labs.  
              </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_icon">
              <FaShieldAlt size={60} />
            </div>
            <div className="card_content">
              <h2 className="card_title">
                Security
              </h2>
              <p className="card_text">
                Each member of a Vault's security force 
                is hand-picked by the Overseer themselves. 
                Each Vault is provided with enough 
                firearms and armor to arm ten men. 
                Each Vault is designed with surface 
                monitors and communication systems to 
                facilitate connections between Vaults. 
              </p>
            </div>
          </div>
        </li>
        <li className="cards_item">
          <div className="card">
            <div className="card_icon">
              <FaCrown size={60} />
            </div>
            <div className="card_content">
              <h2 className="card_title">
                Amenities
              </h2>
              <p className="card_text">
                Utility meets comfort. Each inhabitant 
                will be provided a Vault jumpsuit to 
                replace their own clothing. Enjoy
                private living quarters with the 
                latest in home appliances, like the 
                Floorsuck Autocleaner Systems and the 
                Culinator 3000 Kitchen Systems, as well 
                as access to complete libraries of social
                and entertainment files. 
              </p>
            </div>
          </div>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default Services; 