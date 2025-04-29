/*import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Button from "./Button"

const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: gray;
  margin-top: -100px;
`;

const HeroText = styled.h1`
  font-size: 4rem; 
  font-weight: bold;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.35); 
  color: black;
`;

const HeroSection = () => {
  return (
    <Hero>
      <div>
        <HeroText>Welcome to our Website !</HeroText>
        <h3>Your guide to a healthier diet .</h3>
        <Button variant="primary"  >
        Explor recipes
      </Button>
      <Link to="/sign-up">
      <Button variant="secondary">Sign Up</Button>
      </Link>
      </div>
    </Hero>
  );
};

export default HeroSection;*/

// HeroSection.js
/*import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
  return (
    <Section>
      
      <TextWrapper>
        <Title>
          Providing <Highlight1>a healthy diet</Highlight1><br />
          and a <Highlight2>personalised workout</Highlight2>
        </Title>
        <Description>
          Discover the perfect balance of nutrition and fitness, tailored just for you.
        </Description>
        <Button>explore diet</Button>
        <Button>Sign Up</Button>
      </TextWrapper>
    </Section>
  );
};

export default HeroSection;

// Styled Components
const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 80px;
  background: white;
  font-family: 'Helvetica Neue', sans-serif;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Image = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  filter: grayscale(100%);
`;

const TextWrapper = styled.div`
  max-width: 550px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
`;

const Highlight1 = styled.span`
  background-color: #e0ff6f;
`;

const Highlight2 = styled.span`
  background-color: #b2c7ff;
  text-decoration: underline;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 32px;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 14px 24px;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Section>
      <ImagesWrapper>
        <TopRow>
          <StyledImage src="/images/salade-prep.jpg" alt="MEAL 1" />
          <StyledImage src="/images/man.jpg" alt="MEAL 2" />
        </TopRow>
        <BottomRow>
          <StyledImage src="/images/Healthy-Vegan.jpg" alt="Person " />
        </BottomRow>
      </ImagesWrapper>

      <Content>
        <Title>
          Providing <Highlight1>a healthy diet</Highlight1><br />
          and a <Highlight2>personalised workout</Highlight2>
        </Title>
        <Description>
          Discover a wellness journey that fits your body and lifestyle. Simple. Tailored. Effective.
        </Description>
        <ButtonsWrapper>
          <PrimaryButton>Explore more</PrimaryButton>
          <Link to="/sign-up" >
            <SecondaryButton>Sign up</SecondaryButton>
          </Link>
        </ButtonsWrapper>
      </Content>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 80px;
  background: #fff;
  font-family: 'Helvetica Neue', sans-serif;
  flex-wrap: wrap;
`;

const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TopRow = styled.div`
  display: flex;
  gap: 16px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const Content = styled.div`
  max-width: 550px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
`;

const Highlight1 = styled.span`
  background-color: #e0ff6f;
  text-decoration: underline;
`;

const Highlight2 = styled.span`
  background-color: rgb(32, 200, 161);
  text-decoration: underline;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 32px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const PrimaryButton = styled.button`
  background-color: rgb(32, 200, 161);
  color: black;
  font-size: 25px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 999px;
  border: none;
  cursor: pointer;

  &:hover {
   opacity: 0.8;
    
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 2px solid black;
  color: black;

  &:hover {
    background-color: #eee;
  }
`;

