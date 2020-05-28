import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Payment() {
  return (
    <Container>
      <div>결제금액 3000</div>
      <div>총 상품 금액 100</div>
      <div>상품 할인 금액 20000</div>
      <div>최종가격 20000</div>
    </Container>
  );
}

export default Payment;

const Container = styled.div`
  width: 100%;
  height: 200vh;
  border: 3px solid blue;
`;
