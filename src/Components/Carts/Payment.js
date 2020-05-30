import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {coupons} from "./coupons"

const applyRateCoupon = (rate, items) => {
  return items.reduce((acc, item) => {
    const { counts, price: pricePerCount, availableCoupon } = item;
    const price = pricePerCount * counts;
    if (availableCoupon === undefined) return acc + price * (100 - rate) / 100;
    return acc + price;
  }, 0);
}


const applyAmountCoupon = (amount, items) => {
  // 쿠폰적용 가능한 가격
  let softPrice = 0;
  // 쿠폰 적용 불가능한 가격
  let hardPrice = 0;
  //  쿠폰의 종류를 분리
  for (const item of items) {
    const { counts, price: pricePerCount, availableCoupon } = item;
    const price = pricePerCount * counts;
    if (availableCoupon === undefined) {
      softPrice += price
    } else {
      hardPrice += price
    }
  };
  
  const appliedSoftPrice = (() => {
    const result = softPrice - amount;
    return result < 0 ? 0 : result;
  })();

  return appliedSoftPrice + hardPrice;
}

const applyCoupon = (items, coupons) => {
  return (coupons.type === 'rate') 
    ? applyRateCoupon(coupons.discountRate, items)
    : applyAmountCoupon(coupons.discountAmount, items)
}

function Payment(props) {

  const { orderList} = props
  const [selectedList, setSelectedList] = useState([])
  
  const [coupon, setCoupon] = useState({
    type: null,
    factor: 0,
  });

  useEffect(()=>{
    // checkselectedItem()
  },[orderList])
  
  const selectedItem = orderList.filter((el)=> el.selected === true)

  // const checkselectedItem = () => {
  //  console.log('선택된것',selectedItem)
  // }

  return (
    <Container>
      <div>총가격</div>
      <div>{selectedItem.reduce((acc, curr) => acc + (curr.counts * curr.price), 0)}</div>
      <div>5천원 쿠폰 적용 할인가</div>
      <div>{applyCoupon(selectedItem, coupons[0])}</div>
      <div></div>
      <div>비율 할인 적용 가격</div>
      <div>{applyCoupon(selectedItem, coupons[1])}</div>


    </Container>
  );
}

const mapStateToProps = (state) => ({
  orderList : state.orderList
});

export default connect(mapStateToProps)(Payment);

const Container = styled.div`
  width: 100%;
  height: 200vh;
  border: 3px solid blue;
`;
