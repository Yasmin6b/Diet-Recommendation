import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background: #f5f5f5;
  padding: 10px;
`;

const Td = styled.td`
  padding: 10px;
  text-align: center;
`;

const Avatar = styled.div`
  background-color: ${() => '#' + Math.floor(Math.random() * 16777215).toString(16)};
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-right: 1rem;
  padding: 8px 12px;
  background-color: ${props => props.danger ? '#e74c3c' : '#3498db'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MembersTable = () => {
  const mockMembers = [
    {
      id: 1,
      email: 'alice@example.com',
      role: 'Admin',
      subscription_date: '2024-01-12'
    },
    {
      id: 2,
      email: 'bob@example.com',
      role: 'Member',
      subscription_date: '2024-03-05'
    },
    {
      id: 3,
      email: 'charlie@example.com',
      role: 'Member',
      subscription_date: '2024-02-20'
    }
  ];

  return (
    <Container>
      <div style={{ marginBottom: '1rem' }}>
        <Button>Edit</Button>
        <select>
          <option value="">All Roles</option>
          <option value="Member">Member</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <Table>
        <thead>
          <tr>
            <Th>Email</Th>
            <Th>User ID</Th>
            <Th>Role</Th>
            <Th>Subscription Date</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {mockMembers.map(member => (
            <tr key={member.id}>
              <Td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Avatar>{member.email.charAt(0).toUpperCase()}</Avatar>
                {member.email}
              </Td>
              <Td>{member.id}</Td>
              <Td>{member.role}</Td>
              <Td>{new Date(member.subscription_date).toLocaleDateString()}</Td>
              <Td>
                <Button danger>Delete</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MembersTable;
