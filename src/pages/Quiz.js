import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Progress from '../components/Progress';
import Question from '../components/Question';
import Button from '../components/Button';
import questions from '../assets/data/questions.json';
import { shuffle } from '../utils/quiz';

export default function Quiz() {
  const [cardNumber, setCardNumber] = useState(0);
  let { id } = useParams();
  const deck = useMemo(() => shuffle(questions[id]), [id]);
  return (
    <div>
      <h1>{id.toUpperCase()}</h1>
      <Progress total="3" current={cardNumber + 1} />
      <Question question={deck[cardNumber].question} />
      <Button
        isDisabled={cardNumber >= deck.length}
        onClick={() => setCardNumber(cardNumber + 1)}
      >
        Next
      </Button>
    </div>
  );
}
