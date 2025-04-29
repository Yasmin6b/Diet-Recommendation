import React from 'react';
import styled from 'styled-components';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  LineChart, Line
} from 'recharts';

// ==== Styled ====
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F4F4F4;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

const Section = styled.div`
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #000;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

// ==== Données fictives ====
const weightData = [
  { date: '01/04', weight: 75 },
  { date: '02/04', weight: 74.5 },
  { date: '03/04', weight: 74 },
  { date: '04/04', weight: 73.5 },
  { date: '05/04', weight: 73 },
];

const nutrientData = [
  { name: 'Protein', value: 40 },
  { name: 'Fat', value: 25 },
  { name: 'Carbohydrate', value: 35 },
];

const activityData = [
  { date: '01/04', minutes: 30 },
  { date: '02/04', minutes: 45 },
  { date: '03/04', minutes: 20 },
  { date: '04/04', minutes: 60 },
  { date: '05/04', minutes: 50 },
];

const COLORS = ['#00a98b', '#ff6363', '#ffc658'];

const ProgressTrackingPage = () => {
  return (
    <PageContainer>

      {/* Row contenant les deux premières sections côte à côte */}
      <Row>
        <Section>
          <SectionTitle>Changement de poids</SectionTitle>
          <ChartWrapper>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weightData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['auto', 'auto']} />
                <Tooltip />
                <Bar dataKey="weight" fill="#00a98b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Section>

        <Section>
          <SectionTitle>Apport nutritionnel</SectionTitle>
          <ChartWrapper>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={nutrientData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {nutrientData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartWrapper>
        </Section>
      </Row>

      {/* Section 3 en dessous */}
      <Section>
        <SectionTitle>Activité physique</SectionTitle>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="minutes" stroke="#00a98b" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </Section>

    </PageContainer>
  );
};

export default ProgressTrackingPage;
