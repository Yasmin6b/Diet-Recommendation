/*import styled from "styled-components";
import {Link} from "react-router-dom";

const LandingContainer = styled.div`
  // Add your styles here
`;

const Logo = styled.div`
  // Add your styles here
`;

const NavButton = styled.div`
  // Add your styles here
`;

const Container = styled.div`
  // Add your styles here
`;

const LandingPage = () => {
  return(
    <div>
      <LandingContainer>
        <header>
          <Logo>my logo</Logo>
          <NavButton>
            <button>recipe</button>
            <button>profile</button>
            <button>about</button>
          </NavButton>
          <Container>
            <h2>Your guide to a heathly nutrition</h2>
            <p>Découvrez des régimes adaptés à vos besoins et objectifs de santé.</p>
          </Container>
        </header>
      </LandingContainer>
    </div>
  );
};

export default LandingPage;
*/

/*import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import '../Styles/style.css'*/
/*import backgroundimg from '../assets/background-img.jpg'

const MainContainer = styled.main`
  width: 500px;
  height: 500px;
  background-size: cover;
 
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

 background-image: ${({ bgImage }) => `url(${bgImage})`};
   bgImage={backgroundimg}
    background: url('/background-img.jpg');
*/

/*const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden; 
`;

const Footer = styled.footer`
  margin-top: 2rem;
  color: gray;
  font-size: 0.9rem;
`;


function LandingPage() {
  return (
     <MainContainer>
       <div className='container'>
        <Navbar/>
        <HeroSection/>
      </div>
      <Footer>
        © 2025 NutriGuide - Tous droits réservés.
      </Footer>
     </MainContainer>
  )
}

export default LandingPage*/

import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorks from '../components/HowItWorks';
import TestimonialsSection from '../components/Testimonial';
import Footer from '../components/footer';
import '../Styles/style.css';

const MainContainer = styled(motion.main)`
  width: 100vw;
  height: 100vh;
`;

function LandingPage() {
  return (
    <>
      <Navbar />

      <MainContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className='container'
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div style={{ marginTop: '100px' }}>
            <HeroSection />
            <FeaturesSection />
            <HowItWorks />
            <TestimonialsSection />
            <Footer />
          </div>
        </motion.div>
      </MainContainer>
    </>
  );
}


export default LandingPage;
