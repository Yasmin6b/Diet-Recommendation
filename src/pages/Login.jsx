import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from 'react-router-dom'

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4; 
`;

const LoginContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3); /* Effet 3D */
  width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease;

  &:focus {
    border-color: #ffcc00; /* Jaune canari */
  }
`;

const TextLink = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #555;

  a {
    color: #00a98b;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function Login() {
  return (
    <Overlay>
      <LoginContainer>
        <Title>Sign in</Title>
        <Form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Link to="/admindashboard">
           <Button variant="primary">
             Sign in
           </Button>
          </Link>
        </Form>
        <TextLink>
          Don't have an account? <Link to="/sign-up">Sign Up here</Link>
        </TextLink>
      </LoginContainer>
    </Overlay>
  );
}