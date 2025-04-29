// TestimonialsSection.jsx
/*import React from 'react';
import styled from 'styled-components';

const testimonials = [
  {
    name: 'Ahmed Chaliby',
    role: 'Fitness Enthusiast',
    img: '/images/ahmed.jpg',
    quote: "This app completely transformed my routine. I feel healthier, stronger, and more motivated than ever!",
  },
  {
    name: 'Imen Aaref',
    role: 'Nutrition Novice',
    img: '/images/imen.jpg',
    quote: "Finally, a plan that fits my busy schedule. The recipes are delicious and super easy to follow!",
  },
];

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f9fafa;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  p {
    font-style: italic;
    color: #03423c;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  h4 {
    margin: 0;
    color: #023020;
    font-size: 1.1rem;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
    color: #056d5e;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: center;
  margin-left: 45px;
`;

const TestimonialsSection = () => (
  <Section>
    <Title>Testimonials</Title>
    <Grid>
      {testimonials.map((t, idx) => (
        <Card key={idx}>
          <img src={t.photo} alt={t.name} />
          <p>“{t.quote}”</p>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default TestimonialsSection;*/

// TestimonialsSection.jsx
import React from 'react';
import styled from 'styled-components';

// Importer directement les images JPG
import testimonial1 from '../assets/ahmed.jpg';
import testimonial2 from '../assets/imen.jpg';

const testimonials = [
  {
    name: 'Ahmed Ben Chaib',
    role: 'Fitness Enthusiast',
    img: testimonial1,
    quote: "This app completely transformed my routine. I feel healthier, stronger, and more motivated than ever!",
  },
  {
    name: 'Imen Meghiref',
    role: 'Nutrition Novice',
    img: testimonial2,
    quote: "Finally, a plan that fits my busy schedule. The recipes are delicious and super easy to follow!",
  },
];

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f9fafa;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  p {
    font-style: italic;
    color: #03423c;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }

  h4 {
    margin: 0;
    color: #023020;
    font-size: 1.1rem;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
    color: #056d5e;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 24px;
  text-align: center;
  margin-left: 45px;
`;

const TestimonialsSection = () => (
  <Section id='testimonials'>
    <Title>Testimonials</Title>
    <Grid>
      {testimonials.map((t, idx) => (
        <Card key={idx}>
          <img src={t.img} alt={`${t.name} profile`} />
          <p>“{t.quote}”</p>
          <h4>{t.name}</h4>
          <span>{t.role}</span>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default TestimonialsSection;
