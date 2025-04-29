import React from 'react';
import styled from 'styled-components';
import { FaEdit } from 'react-icons/fa';

// === Conteneur global ===
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #F4F4F4;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// === Section générique ===
const Section = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px 30px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// === Header Profile ===
const Header = styled(Section)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #00a98b;
  background-image: url('https://via.placeholder.com/80');
  background-size: cover;
  background-position: center;
`;

const NameBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  margin: 0;
  color: #000;
`;

const Subtitle = styled.span`
  color: #555;
  font-size: 14px;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #00a98b;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

// === Ligne d'information (2 colonnes) ===
const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const InfoItem = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #777;
`;

const Value = styled.div`
  font-size: 16px;
  color: #333;
`;

const SectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;


// === Composant principal ===
const ProfilePage = () => {
  return (
    <PageContainer>
      {/* === Section 1 : En-tête === */}
      <Header>
        <ProfileInfo>
          <Avatar />
          <NameBlock>
            <Name>Nom complet</Name>
            <Subtitle>Votre bio ou rôle</Subtitle>
            <Subtitle>Ville, Pays</Subtitle>
          </NameBlock>
        </ProfileInfo>
        <EditButton><FaEdit /> Modifier</EditButton>
      </Header>

      {/* === Section 2 : Infos personnelles === */}
      <Section>
        <SectionTitleRow>
          <SectionTitle>Informations personnelles</SectionTitle>
          <EditButton><FaEdit /> Modifier</EditButton>
        </SectionTitleRow>
        <InfoRow>
          <InfoItem>
            <Label>Prénom</Label>
            <Value>—</Value>
          </InfoItem>
          <InfoItem>
            <Label>Nom</Label>
            <Value>—</Value>
          </InfoItem>
          <InfoItem>
            <Label>Email</Label>
            <Value>—</Value>
          </InfoItem>
          <InfoItem>
            <Label>Téléphone</Label>
            <Value>—</Value>
          </InfoItem>
          <InfoItem style={{ flex: '1 1 100%' }}>
            <Label>Bio</Label>
            <Value>—</Value>
          </InfoItem>
        </InfoRow>
      </Section>

      {/* === Section 3 : Infos santé === */}
      <Section>
        <SectionTitleRow>
          <SectionTitle>Informations santé</SectionTitle>
          <EditButton><FaEdit /> Modifier</EditButton>
        </SectionTitleRow>
        <InfoRow>
          <InfoItem>
            <Label>Poids</Label>
            <Value>—</Value>
          </InfoItem>
          <InfoItem>
            <Label>Taille</Label>
            <Value>—</Value>
          </InfoItem>
          <InfoItem>
            <Label>Niveau d’activité</Label>
            <Value>—</Value>
          </InfoItem>
          <InfoItem style={{ flex: '1 1 100%' }}>
            <Label>Objectif</Label>
            <Value>—</Value>
          </InfoItem>
        </InfoRow>
      </Section>
    </PageContainer>
  );
};

export default ProfilePage;

