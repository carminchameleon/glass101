import React, { useState, useEffect} from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { removeFromCart } from "../../Redux/Actions/index";
import Header from '../../Components/Header/Header'
import OrderList from '../../Components/Carts/OrderLists'

function Cart(props) {
  console.log("데이터 체크", props);
  const { cartItems } = props;
  /// 기본적으로 장바구니에 있는 모든 상품을 넣어줌
  const [selectedList , setSelectedList] = useState(cartItems)

  return (
    <Container>
      <Header></Header>
      <OrderList/>
      <div>
        현재 주문 가격
        {/* Total :
        {selectedList.reduce((acc, item) => acc + item.price * item.count, 0)} */}
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartItems : state.cart.items
})


export default connect( mapStateToProps, { removeFromCart })(Cart);

const Container = styled.div`
width: 100%;
height: 200vh;
border : 3px solid blue;`