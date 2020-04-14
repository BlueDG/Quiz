import React, { useState } from 'react';
import styled from 'styled-components';
import categories from '../assets/data/questions.json';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

const Title = styled.h2`
  display: flex;
  justify-content: center;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 30%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1%;
`;

export default function Category() {
  const [category, setCategory] = useState();
  const allCategories = Object.keys(categories);
  const history = useHistory();
  return (
    <div>
      <Title>Category select</Title>
      {allCategories.map((c, i) => {
        return (
          <List key={i}>
            <label>{c}</label>
            <input
              type="checkbox"
              value={c}
              checked={category === c}
              onChange={(e) => setCategory(e.target.value)}
            />
          </List>
        );
      })}
      <Container>
        <Button
          type="submit"
          disabled={!category}
          onClick={() => history.push(`/quiz/difficulty`)}
        >
          Start
        </Button>
      </Container>
      <Container>
        <Button type="submit" onClick={() => history.push(`/`)}>
          Back
        </Button>
      </Container>
    </div>
  );
}
