import React from 'react';
import styled from 'styled-components';
import { Heart, User, Dumbbell, Utensils } from 'lucide-react';

const Container = styled.div`
  padding: 3rem;
  background-color: #fff;
  color: #000;
  min-height: 100%;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 2rem;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  background-color: #edfdf9;
  color: #000;
  font-size: 1rem;
  font-weight: 500;
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 2px solid #00a98b;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d9f6f0;
  }

  svg {
    color: #000; // icône en noir
  }
`;

const HelloPage = () => {
  return (
    <Container>
      <Title>Let’s get started! 🥗</Title>
      <Subtitle>We’re happy to guide your nutrition and fitness journey!</Subtitle>

      <ButtonRow>
        <ActionButton>
          <Utensils size={20} /> View My Recipes
        </ActionButton>
        <ActionButton>
          <Dumbbell size={20} /> View My Workout Plan
        </ActionButton>
      </ButtonRow>
    </Container>
  );
};

export default HelloPage;
