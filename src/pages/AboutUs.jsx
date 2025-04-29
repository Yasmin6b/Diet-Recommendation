import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled , { keyframes }from "styled-components";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  background-color: #edfdf9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 800;
  color: black;
  margin-bottom: 1.5rem;
  text-align: center;
  span {
    color: #00a98b;
  }
`;

const Text = styled(motion.p)`
  color: #4a4a4a;
  font-size: 1.2rem;
  max-width: 700px;
  text-align: center;
  margin-bottom: 2rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    align-items: center;
  }
`;

const Image = styled(motion.img)`
  width: 240px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.1);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.8rem;
  color: #00a98b;
  margin-top: 2rem;
  a:hover {
    color: black;
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  color: gray;
  font-size: 0.9rem;
`;

export default function AboutUs() {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌿 This is <span>NutGuide</span> community !🌿
      </Title>
      
      <Text
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our platform helps you adopt a healthier diet through personalized recommendations. Based on your preferences and goals, we suggest meals tailored to your specific needs and nutritional requirements.
      </Text>
      
      <Section>
        <Image src="/images/Healthy meal Idea.jpg" alt="Plan de repas" />
        <Text>Our system creates well-balanced meal plans that are specifically designed to meet your nutritional needs. It takes into account your dietary preferences, health goals, and any restrictions you may have to provide customized meal suggestions that support a healthier lifestyle.</Text>
      </Section>
      
      <Section reverse>
        <Image src="/images/Meal-Prep.jpg" alt="Analyse nutritionnelle" />
        <Text>Analyze your nutritional intake and make informed adjustments to your diet for better health. Our system helps you track your daily consumption, identify deficiencies or excesses, and optimize your meals to ensure a well-balanced and sustainable diet that aligns with your health goals.</Text>
      </Section>
      
      <SocialIcons>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </SocialIcons>
      
      <Footer>
        © 2025 NutriGuide - Tous droits réservés.
      </Footer>
    </Container>
  );
}
