import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/index";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import OrderList from "../../Components/Carts/OrderLists";
import Payment from "../../Components/Carts/Payment";
import EmptyCart from "../../Components/Carts/EmptyCart";
import Footer from "../../Components/Footer/Footer";
function Cart(props) {
  const { cartList } = props;
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
                  <Payment></Payment>
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
`;

const ItemWrapper = styled.div``;

const ItemBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
