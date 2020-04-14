import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>Welcome</h1>
      <Button type="submit" onClick={() => history.push(`/quiz/category`)}>
        Start
      </Button>
    </div>
  );
}
