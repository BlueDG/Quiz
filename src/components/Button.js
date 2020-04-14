import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  text-transform: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export default function Button({ children, isDisabled, onClick }) {
  return (
    <Btn disabled={isDisabled} onClick={onClick}>
      {children}
    </Btn>
  );
}
