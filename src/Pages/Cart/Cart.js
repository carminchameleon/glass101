import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/index";
import Header from "../../Components/Header/Header";
import OrderList from "../../Components/Carts/OrderLists";
import Payment from "../../Components/Carts/Payment";
import EmptyCart from "../../Components/Carts/EmptyCart";
function Cart(props) {
  const { cartList } = props;
  /// 기본적으로 장바구니에 있는 모든 상품을 넣어줌
  return (
    <Container>
      <Header></Header>
      <Section>
        <ItemContainer>
          <ItemWrapper>
            <ItemBox>
              {cartList.length === 0 ? (
                <EmptyCart></EmptyCart>
              ) : (
                <>
                  <OrderList></OrderList>
                </>
              )}
              <Payment></Payment>
            </ItemBox>
          </ItemWrapper>
        </ItemContainer>
      </Section>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartList: state.cartList,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);

const Container = styled.div`
  width: 100%;
  font-family: "Gothic A1", sans-serif;
`;

const Section = styled.section`
  padding-top: 100px;
  position: relative;
  width: 100%;
  max-width: 1405px;
  margin: 0 auto;
  padding-left: 96px;
  padding-right: 96px;
`;

const ItemContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 66px;
  padding-right: 66px;
  clear: both;
`;

const ItemWrapper = styled.div`
  clear: both;
`;

const ItemBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
