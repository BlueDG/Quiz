import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ScreenText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 10%;
  min-height: 100vh;
  background: url(https://image.ibb.co/h2hLAJ/bg.png) #000;
  &::after {
    content: '';
    display: block;
    background: url(https://image.ibb.co/dbSZLJ/bottom.png) no-repeat center;
    margin: 0 auto;
    width: 100%;
    max-width: 500px;
    height: 28px;
  }
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  &::after,
  &::before {
    content: '';
    display: inline-block;
    background: url(https://image.ibb.co/gpxZLJ/top_outer.png);
    width: 140px;
    height: 10px;
    margin: auto 20px;
  }
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  height: 50vh;
  border-top: #000 18px solid;
  border-bottom: #000 18px solid;
  border-top: #000 18px solid;
  border-bottom: #000 18px solid;
  border-image: url(https://image.ibb.co/kHHeny/hor_line.png) 17 11 17 round;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &::after,
  ::before {
    content: '';
    display: inline-block;
    background: url(https://image.ibb.co/kvJfud/box_inner.png) no-repeat center;
    max-width: 642px;
    width: 100%;
    height: 27px;
  }
`;

const Input = styled.input`
  padding: 1%;
  border: 2px solid #d7001e;
  width: auto;
  max-width: 100%;
  overflow: visible;
  outline: 0;
  background: 0 0;
  line-height: normal;
`;

const Button = styled.button`
  border: none;
  overflow: visible;
  outline: 0;
  cursor: pointer;
  background: 0 0;
  line-height: normal;
  background: rgba(219, 14, 21, 0.2);
  padding: 1% 2%;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
`;

export default function Home() {
  const history = useHistory();
  return (
    <ScreenText>
      <Title>Welcome</Title>
      <ContainerForm>
        <Form action="">
          <h2>Enter your name</h2>
          <Input type="text" maxLength="13" required />
          <Button type="submit" onClick={() => history.push(`/quiz/category`)}>
            [ Start ]
          </Button>
        </Form>
      </ContainerForm>
    </ScreenText>
  );
}
