import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const OrderList = (prop) => {
  console.log(props);
  return (
    <Container>
      <Wrapper>
        <WrapperLine></WrapperLine>
      </Wrapper>
    </Container>
  );
};

export default OrderList;

const Container = styled.div`
  padding-top: 30px;
  position: relative;
  max-width: 1500px;
  min-width: 900px;
  margin: 0 auto;
  padding: 0 50px 200px;
  border: 1px solid blue;
`;
const Wrapper = styled.div`
  padding-top: 20px;
  margin-bottom: 3.75%;
`;
const WrapperLine = styled.div`
  border-top: 4px solid #000;
  color: #4c4c4c;
  font-size: 12px;
`;
