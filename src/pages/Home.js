import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

const ScreenText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 95vh;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  text-align: center;
  align-items: center;
  margin: 0 auto;
`;
export default function Home() {
  const history = useHistory();
  return (
    <ScreenText>
      <Title>Welcome</Title>
      <Container>
        <h2>Enter your name</h2>
        <Button type="submit" onClick={() => history.push(`/quiz/category`)}>
          Start
        </Button>
      </Container>
    </ScreenText>
  );
}
