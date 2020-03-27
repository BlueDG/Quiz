import React from "react";
import styled from "styled-components";

export default function Button({ children, disabled }) {
  return <Btn disabled={disabled}>{children}</Btn>;
}

const Btn = styled.button`
  text-transform: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;
