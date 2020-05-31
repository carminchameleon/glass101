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
    <Section>
      <MainTitleContainer>
      <MainTitle>더 다채로운 내 일상을 위한 뿌듯한 선택 , 클래스 IOI</MainTitle>
      </MainTitleContainer>
      <ItemContainer>
        <ItemWrapper>
          <ItemBox>
            <OrderList></OrderList>
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
  height: 200vh;
  font-family: 'Gothic A1', sans-serif;
`;

const Section = styled.section`
    padding-top: 130px;
    position: relative;
    width: 100%;
    max-width: 1405px;
    margin: 0 auto;
    padding-left: 96px;
    padding-right: 96px;

`;
const MainTitleContainer = styled.div`
    padding: 20px 0;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 66px;
    padding-right: 66px;
    `

const MainTitle = styled.div`
    padding: 30px 0;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 36px;
    padding-right: 36px;
    font-size: 1rem;
    color: #0435f3;
    background-color: #f8f8f8;
    font-weight:bold;      
  `

  const ItemContainer = styled.div`
    position: relative;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 66px;
    padding-right: 66px;
    clear: both;
     `

  const ItemWrapper = styled.div`
    clear: both;
  `

  const ItemBox = styled.ul`
   width: 100%;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:flex-start;`
  