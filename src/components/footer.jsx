import React from "react";
import styled from "styled-components";
import { FaPhone, FaEnvelope, FaFacebook, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: #edfdf9;
  color: #333;
  padding: 2rem 1rem;
  text-align: center;
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 2rem;
`;

const Column = styled.div`
  min-width: 180px;

  h4 {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  a {
    display: block;
    color: #333;
    text-decoration: none;
    margin: 0.4rem 0;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;

  p {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  svg {
    color: #000;
  }
`;

const SocialIcons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;

  svg {
    color: #000;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 1rem;
  border-top: 1px solid #ccc;
  padding-top: 1rem;
  font-size: 1rem;
  color: #555;

  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 0.5rem;
  }

  a {
    margin: 0 0.5rem;
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Stitle = styled.h4`
    color: black;
    font-size: 23px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <TopSection>
        <Column>
          <Stitle>Information</Stitle>
          <a href="/about-us">About Us</a>
          <a href="/blog">Blog</a>
          <a href="#testimonials">Testimonials</a>
          <a href="/contact">Contact Us</a>
        </Column>

        <Column>
          <Stitle>Contact Us</Stitle>
          <ContactInfo>
            <p><FaPhone /> +213 540 013 262</p>
            <p><FaEnvelope /> support@NutriGuide.com</p>
          </ContactInfo>
          <SocialIcons>
            <FaFacebook />
            <FaGoogle />
            <FaTwitter />
            <FaInstagram />
          </SocialIcons>
        </Column>
      </TopSection>

      <BottomBar>
        <div>© 2025 NutriGuide | All Rights Reserved</div>
        {/*<div>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>*/}
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
