import React from "react";
import styled from "styled-components";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer,
} from "recharts";

const Container = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const KPIsContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const KPIBox = styled.div`
  flex: 1;
  min-width: 200px;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const GraphsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const COLORS = ["#00a98b", "#ff8042", "#0088fe"];

const Overview = () => {
  // Fake data (remplacer par des vraies datas quand tu connectes au backend)
  const kpis = {
    totalMembers: 1320,
    totalRequests: 230,
    totalRecipes: 85,
    totalBlogs: 45,
  };

  const newMembersData = [
    { name: "Jan", users: 50 },
    { name: "Feb", users: 75 },
    { name: "Mar", users: 110 },
    { name: "Apr", users: 90 },
  ];

  const goalDistribution = [
    { name: "Prise de poids", value: 400 },
    { name: "Perte de poids", value: 300 },
    { name: "Maintien", value: 200 },
  ];

  const activityData = [
    { name: "Semaine 1", demandes: 40 },
    { name: "Semaine 2", demandes: 65 },
    { name: "Semaine 3", demandes: 50 },
    { name: "Semaine 4", demandes: 80 },
  ];

  return (
    <Container>
      <h2>Overview</h2>

      <KPIsContainer>
        <KPIBox>
          <h3>Membres inscrits</h3>
          <p>{kpis.totalMembers}</p>
        </KPIBox>
        <KPIBox>
          <h3>Demandes reçues</h3>
          <p>{kpis.totalRequests}</p>
        </KPIBox>
        <KPIBox>
          <h3>Recettes ajoutées</h3>
          <p>{kpis.totalRecipes}</p>
        </KPIBox>
        <KPIBox>
          <h3>Blogs ajoutés</h3>
          <p>{kpis.totalBlogs}</p>
        </KPIBox>
      </KPIsContainer>

      <GraphsContainer>
        <div>
          <h4>Nouveaux membres / mois</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={newMembersData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="users" fill="#00a98b" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h4>Objectifs des utilisateurs</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={goalDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {goalDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <h4>Évolution des demandes</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="demandes" stroke="#00a98b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GraphsContainer>
    </Container>
  );
};

export default Overview;