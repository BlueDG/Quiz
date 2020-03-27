import React from 'react';
import Progress from '../components/Progress';
import Question from '../components/Question';
import Answers from '../components/Answers';
import Button from '../components/Button';
import Data from '../data/data.json';

export default function Quizz() {
  const dataKeys = Object.keys(Data);
  const randomIndex = Math.floor(Math.random() * dataKeys.length);
  const randomQuestion = Data[dataKeys[randomIndex]];

  return (
    <div>
      <h1>Quiz page</h1>
      <Progress total="3" current="1" />
      <Question question={randomQuestion} />
      <Answers question={randomQuestion} />
      <Button>Next</Button>
    </div>
  );
}
