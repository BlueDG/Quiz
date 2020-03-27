import React from 'react';
import Answer from './Answer';
import AnswerData from '../data/answers.json';

export default function Answers({ question }) {
  /*const dataKeys = Object.keys(AnswerData);
  const randomIndex = Math.floor(Math.random() * dataKeys.length);
  const randomAnswer = AnswerData[dataKeys[randomIndex]];*/

  const questionCategory = question.category;
  const answerCategory = AnswerData
    // const filteredAnswer = AnswerData.reduce((a, o) => (0.questionCategory && a.push(o.value), a), [])

    .return(
      <div>
        <Answer answer={randomAnswer} />
      </div>
    );
}
