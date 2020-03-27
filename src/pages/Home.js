import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  const [difficulty, setDifficulty] = useState();
  const difficulties = [
    {
      id: 1,
      label: 'Easy',
      questions: 3
    },
    {
      id: 2,
      label: 'Normal',
      questions: 4
    },
    {
      id: 3,
      label: 'Hard',
      questions: 5
    }
  ];

  return (
    <div>
      <h1>Welcome to our Quizz</h1>
      <h2>Please select level of Difficulty</h2>
      {difficulties.map((e, i) => {
        return (
          <List key={i}>
            <label>=> {e.label}</label>
            <input
              type="checkbox"
              value={e.questions}
              checked={e.questions === difficulty}
              onChange={() => setDifficulty(e.questions)}
            />
          </List>
        );
      })}
      <Link to={`/quiz${difficulty}`}>
        <Button type="submit" disabled={!difficulty}>
          Start
        </Button>
      </Link>
    </div>
  );
}

const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 35%;
`;
