import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/en-bonne-sante.png';
import Button from '../components/Button';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px 2%;
  height: 90px;
  z-index: 999;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: box-shadow 0.3s ease-in-out;
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <LogoImage
        src={Logo}
        alt="NutriGuide Logo"
        onError={(e) => (e.target.style.display = 'none')}
      />
      <Title>NutriGuide</Title>
      <NavLinks>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <Button variant="primary">Sign in</Button>
        </Link>
        <Link to="/About-us" style={{ textDecoration: 'none' }}>
          <Button variant="primary">About Us</Button>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

/*import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/en-bonne-sante.png';
import Button from '../components/Button';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 10px 2%;
  height: 90px;
  z-index: 999;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: box-shadow 0.3s ease-in-out;
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Ici, on vérifie dans le localStorage si l'utilisateur est connecté.
    const auth = localStorage.getItem('user');
    if (auth) {
      setUser(JSON.parse(auth));
    }
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <LogoImage
        src={Logo}
        alt="NutriGuide Logo"
        onError={(e) => (e.target.style.display = 'none')}
      />
      <Title>NutriGuide</Title>
      <NavLinks>
        {user ? (
          <Link to="/profile" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Profile</Button>
          </Link>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Sign in</Button>
          </Link>
        )}
        <Link to="/about-us" style={{ textDecoration: 'none' }}>
          <Button variant="primary">About Us</Button>
        </Link>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;*/