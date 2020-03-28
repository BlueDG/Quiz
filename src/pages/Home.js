import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import categories from "../assets/data/questions.json";

const List = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 35%;
`;

export default function Home() {
  const [category, setCategory] = useState();
  const allCategories = Object.keys(categories);
  const history = useHistory();
  return (
    <div>
      <h1>Welcome to our Quizz</h1>
      <h2>Please select your category</h2>
      {allCategories.map((c, i) => {
        return (
          <List key={i}>
            <label>=> {c}</label>
            <input
              type="checkbox"
              value={c}
              checked={category === c}
              onChange={e => setCategory(e.target.value)}
            />
          </List>
        );
      })}
      <Button
        type="submit"
        disabled={!!category}
        onClick={() => history.push(`/quiz/${category}`)}
      >
        Start
      </Button>
    </div>
  );
}
