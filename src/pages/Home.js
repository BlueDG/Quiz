import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export default function Home() {
  const history = useHistory();
  return (
    <div>
      <Title>Welcome</Title>
      <Container>
        <Button type="submit" onClick={() => history.push(`/quiz/category`)}>
          Start
        </Button>
      </Container>
    </div>
  );
}
