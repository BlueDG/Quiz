import React from 'react';

export default function Answer({ answer }) {
  console.log('données reçues de answer: ', answer);
  return <button>{answer.id}</button>;
}
