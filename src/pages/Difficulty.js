import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useHistory } from 'react-router-dom';

const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-left: 0;
  li {
    padding: 1%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1%;
`;

export default function Difficulty() {
  const history = useHistory();
  return (
    <div>
      <Title>Select a difficulty</Title>
      <List>
        <li>Easy</li>
        <li>Normal</li>
        <li>Hard</li>
      </List>
      <Container>
        <Button type="submit" onClick={() => history.push(`/quiz/category`)}>
          Back
        </Button>
      </Container>
    </div>
  );
}
