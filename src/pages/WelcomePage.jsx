import React from 'react' 
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/en-bonne-sante.png';
import Button from '../components/Button';

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px 4%;
  height: 90px; 
`;

const LogoImage = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  margin-left: 20px;
  font-size: 22px;
  color: black;
`;

const NavLinks = styled.ul`
  flex: 1;
  justify-content: flex-end;
  list-style: none;
  display: flex;
  gap: 15px;
`;

export default function WelcomePage() {
  return (
    <NavbarContainer>
          <LogoImage src={Logo} alt="NutriGuide Logo" onError={(e) => e.target.style.display = 'none'} />
          <Title>NutriGuide</Title>
          <NavLinks>
            <Link to="" style={{ textDecoration: 'none' }}>
              <Button variant="primary">Create Diet</Button>
            </Link>
            <Link to="" style={{ textDecoration: 'none' }}>
              <Button variant="primary">Profile</Button>
            </Link>
          </NavLinks>
        </NavbarContainer>
  )
}
