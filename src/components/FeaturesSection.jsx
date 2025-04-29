// FeaturesSection.jsx
import React from 'react';
import styled from 'styled-components';

// Tableau de données pour générer les cartes
const features = [
  {
    title: 'Tailored Meal Plans',
    desc: 'Get weekly meal plans crafted by our AI to match your goals, tastes, and dietary needs',
    img: '/images/dish2.png',
    bg: '#FFEEF2', // pastel rose
  },
  {
    title: 'Daily Recipe Inspirations',
    desc: 'Chef‑curated healthy recipes every morning, designed to keep your nutrition on point.',
    img: '/images/dish1.png',
    bg: '#FEF7E0', // pastel jaune
  },
  {
    title: 'Progress Dashboard',
    desc: 'Track your weight, macros, and activity trends in one sleek interface ,and stay motivated.',
    img: '/images/progress.png',
    bg: '#E8FFF1', // pastel vert
  },
  {
    title: 'Adaptive Workout Plans',
    desc: 'Enjoy personalized workout routines that goes along with your diet and give you the best result',
    img: '/images/run.png',
    bg: '#E0F7FF', // pastel bleu
  },
];

const Section = styled.section`
  padding: 4rem 2rem;
  background: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: ${({ bg }) => bg};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  min-height: 280px;

  h3 {
    color: black;
    font-size: 23px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
      font-size: 16px;
      color: #555;
      margin-bottom: 35px;
      
  }
  img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 130px;
    height: auto;
    pointer-events: none;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: left;
  margin-left: 60px;
`;

const FeaturesSection = () => {
  return (
    <Section>
      <Title>
        What We Offer You !
      </Title>
      <Grid>
        {features.map((f, i) => (
          <Card key={i} bg={f.bg}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <img src={f.img} alt={f.title} />
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default FeaturesSection;