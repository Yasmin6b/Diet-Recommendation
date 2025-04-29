import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LogOut, Users, BarChart2, MailOpen } from 'lucide-react';
import Logo from '../assets/en-bonne-sante.png';
import Button from '../components/Button';

// == Layout Containers ==
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #F4F4F4;
  padding: 10px 2%;
  height: 90px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
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

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 90px); /* full height minus navbar */
`;

// == Sidebar ==
const Sidebar = styled.div`
  width: 250px;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9f6f0;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #000; /* noir */
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ffe6e6;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #fff;
`;

const DashboardLayout2 = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <LayoutContainer>
      {/* Navbar en haut */}
      <NavbarContainer>
        <LogoWrapper>
          <Link to="/" >
          <LogoImage src={Logo} alt="NutriGuide Logo" />
          </Link>
          <Title>NutriGuide</Title>
        </LogoWrapper>
        <NavLinks>
          <Link to="blogs" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Add Blog</Button>
          </Link>
          <Link to="addrecipe" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Add Recipe</Button>
          </Link>
        </NavLinks>
      </NavbarContainer>

      {/* Sidebar + Page Content */}
      <MainContent>
        <Sidebar>
          <NavSection>
            <StyledLink to="members">
              <Users size={18} color="#000" /> View Members
            </StyledLink>
            <StyledLink to="requests">
             <MailOpen size={18} color="#000" /> View Requests
            </StyledLink>
            <StyledLink to="overview">
             <BarChart2 size={18} color="#000" /> Overview
            </StyledLink>
          </NavSection>
          <LogoutButton onClick={handleLogout}>
            <LogOut size={20} /> Sign Out
          </LogoutButton>
        </Sidebar>

        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
};

export default DashboardLayout2;
