// HowItWorks.jsx
import React from 'react';
import styled from 'styled-components';
import { FileText, Bookmark, BarChart2 } from 'lucide-react';

const steps = [
  {
    title: 'Fill the Form',
    desc: 'Provide your personal details, preferences, and goals so we can tailor recipes and workouts just for you.',
    Icon: FileText,
    bg: '#E8FFF1', // pastel mint
  },
  {
    title: 'Choose & Save Recipes',
    desc: 'Browse through AI‑curated meal suggestions and bookmark your favourites for easy access.',
    Icon: Bookmark,
    bg: '#FFE9E6', // pastel peach
  },
  {
    title: 'Track Your Progress',
    desc: 'Monitor your weight, nutrition, and activity using the Progress tab in your dashboard sidebar.',
    Icon: BarChart2,
    bg: '#E6E6FF', // pastel lavender
  },
];

const Section = styled.section`
  padding: 4rem 2rem;
  background: #F4F4F4;
  text-align: center;
`;

const StepsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  margin-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 10%;
    right: 10%;
    height: 2px;
    border-top: 2px dashed #d1d1d1;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const StepCard = styled.div`
  position: relative;
  background: transparent;
  padding: 0 1rem;
  z-index: 2;
  max-width: 300px;
  text-align: center;

  & + & {
    margin-left: 2rem;
  }

  .icon-wrapper {
    background: ${({ bg }) => bg};
    padding: 1rem;
    border-radius: 0.75rem;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
  }

  h4 {
    color: black;
    font-size: 23px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    line-height: 1;
    font-size: 16px;
    color: #555;
    margin-bottom: 35px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: center;
  margin-left: 45px;
`;

const HowItWorks = () => (
  <Section>
    <Title>How It Works ?</Title>
    <StepsWrapper>
      {steps.map((step, idx) => {
        const IconComponent = step.Icon;
        return (
          <StepCard key={idx} bg={step.bg}>
            <div className="icon-wrapper">
              <IconComponent size={32} />
            </div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </StepCard>
        );
      })}
    </StepsWrapper>
  </Section>
);

export default HowItWorks;