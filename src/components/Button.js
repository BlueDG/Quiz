import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  outline: 0;
  cursor: pointer;
  border: none;
  line-height: normal;
  &:focus {
    outline: 0;
  }
`;

export default function Button({ children, isDisabled, onClick }) {
  return (
    <Btn disabled={isDisabled} onClick={onClick}>
      {children}
    </Btn>
  );
}
