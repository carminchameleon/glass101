import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/index";
import Header from "../../Components/Header/Header";
import OrderList from "../../Components/Carts/OrderLists";
import Payment from "../../Components/Carts/Payment";
function Cart() {
  /// 기본적으로 장바구니에 있는 모든 상품을 넣어줌
  return (
    <Container>
      <Header></Header>
      <OrderList />
      <Payment />
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartList: state.cartList,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);

const Container = styled.div`
  width: 100%;
  height: 200vh;
  border: 3px solid blue;
`;
