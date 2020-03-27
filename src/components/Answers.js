import React from 'react';
import Answer from './Answer';
import AnswerData from '../data/answers.json';

export default function Answers() {
  const answer = AnswerData.map((data, i) => {
    return <p key={i}>{data.animals.label}</p>;
  });
  console.log('dataReponse: ', answer);
  return (
    <div>
      <Answer answer={answer} />
    </div>
  );
}
