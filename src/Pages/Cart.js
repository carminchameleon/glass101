import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Header from "Components/Header/Header";
import CartList from "Components/Carts/CartList";
import Payment from "Components/Carts/Payment";
import EmptyCart from "Components/Carts/EmptyCart";

function Cart(props) {
  const { cartList } = props;
  return (
    <Container>
      <Header />
      <Section>
        <ItemContainer>
          <ItemWrapper>
            <ItemBox>
              {cartList.length === 0 ? (
                <EmptyCart />
              ) : (
                <>
                  <CartList />
                  <Payment />
                </>
              )}
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

export default connect(mapStateToProps)(Cart);

const Container = styled.div`
  width: 100%;
  font-family: "Gothic A1", sans-serif;
  min-width: 400px;
`;

const Section = styled.section`
  padding-top: 100px;
  position: relative;
  width: 100%;
  max-width: 1405px;
  margin: 0 auto;
  padding-left: 96px;
  padding-right: 96px;
  @media only screen and (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 66px;
  padding-right: 66px;
  @media only screen and (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const ItemWrapper = styled.div``;

const ItemBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
