import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import logo from '../../images/vb-wink.svg';

const About = () => {
  return (
    <section className="about-container" id="about" name="about">
        <motion.div
        className="svg"
        animate={{ translateY: [-30, 0, -30, 0] }}
        transition={{ yoyo: Infinity, duration: 6 }}
      >
        <img src={logo} alt="logo" />
      </motion.div>
        
        <div className="content">
        <p>
            Vault-Tec is a corporation specializing in defense, originally 
            based out of Los Angeles, California. Following the
            success of our Vault&#8482; demonstrations, we've
            happily expanded into Boston, MA, as well as 
            Washington D.C. 
        </p>
        <p>
          The primary focus of Vault-Tec is the development of
          a line of nuclear war defense installations and the 
          technology necessary for their construction. 
          Vault-Tec combines functionality and safety in all 
          of our endeavors, and practical applications prove
          the necessity of our line of products. 
        </p>
        <p> 
          Prepare for the future! Reserve your spot in a 
          Vault&#8482; today, and ease your worries of the 
          growing threat of nuclear war and an uninhabitable
          home! 
        </p>
      </div>
    </section>
  );
}

export default About;