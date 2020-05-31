import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const EmptyCart = (props) => {
  const { history } = props;

  return (
    <Container>
      <Title>웁스! 장바구니가 비었습니다.</Title>
      <ButtonContainer>
        <ButtonWrapper>
          <Button onClick={() => history.push("/")}>CONTINUE SHOPPING</Button>
        </ButtonWrapper>
      </ButtonContainer>
    </Container>
  );
};

export default withRouter(EmptyCart);

const Container = styled.div`
  padding-top: 15%;
  position: relative;
  max-width: 1500px;
  min-width: 900px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 200;
  color: #0052db;
  margin: 80px;
  margin-bottom: 40px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Button = styled.div`
  margin: 0 auto;
  color: #0052db;
  width: 300px;
  padding: 20px;
  border: 2px solid #0052db;
  text-align: center;
  font-size: 1.4rem;
  transition: 0.3s;

  :hover {
    cursor: pointer;
    color: #b47af3;
    border: 2px solid #b47af3;
    transition: all 190ms ease-out 0s;
  }
`;
