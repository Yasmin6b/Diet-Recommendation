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
  margin-right: 0.5rem;
  padding: 8px 12px;
  background-color: ${props => props.reject ? '#e74c3c' : '#2ecc71'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RequestsTable = () => {
  const mockRequests = [
    {
      id: 1,
      email: 'david@example.com',
      requestType: 'Access Upgrade',
      status: 'Pending',
      date: '2024-03-15'
    },
    {
      id: 2,
      email: 'emma@example.com',
      requestType: 'Delete Account',
      status: 'Pending',
      date: '2024-04-01'
    },
    {
      id: 3,
      email: 'noah@example.com',
      requestType: 'Change Email',
      status: 'Pending',
      date: '2024-04-05'
    }
  ];

  return (
    <Container>
      <h2 style={{ marginBottom: '1rem' }}>User Requests</h2>

      <Table>
        <thead>
          <tr>
            <Th>Email</Th>
            <Th>Request Type</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {mockRequests.map(request => (
            <tr key={request.id}>
              <Td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Avatar>{request.email.charAt(0).toUpperCase()}</Avatar>
                {request.email}
              </Td>
              <Td>{request.requestType}</Td>
              <Td>{request.status}</Td>
              <Td>{new Date(request.date).toLocaleDateString()}</Td>
              <Td>
                <Button>Accept</Button>
                <Button reject>Reject</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RequestsTable;
