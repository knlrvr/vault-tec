import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import './Home.css';
import logo from '../../images/vb-finger.svg';

const Home = () => {
    return (
        <section className="home-container" id="home" name="home">
        <motion.div
        className="content"
        initial="initial"
        animate="animate" 
        >
        <h1>
            Vault-Tec Industries
        </h1>
        <p>
            Revolutionizing safety for an uncertain future
        </p>
        <Link
          className="home-btn"
          to={"Services"}
          hashSpy={true}
          spy={true}
          smooth={true}
          delay={100}
          offset={-100}
          duration={500} >
          Reserve Your Spot Today!
        </Link>
      </motion.div>

      <motion.div
        className="svg"
        animate={{ translateY: [-30, 0, -30, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={logo} alt="logo" />
      </motion.div>
    </section>
    );
}

export default Home; 