import React, { useState, useEffect } from "react";
import styled from "styled-components";

const EmptyCart = () => {
  return (
    <Container>
      <Title>웁스! 장바구니가 비었습니다.</Title>
    </Container>
  );
};

export default EmptyCart;

const Container = styled.div`
  padding-top: 30px;
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
