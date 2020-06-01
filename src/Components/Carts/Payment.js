import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { COUPONS_URL } from "config";
import styled from "styled-components";

const applyRateCoupon = (rate, items) => {
  return items.reduce((acc, item) => {
    const { counts, price: pricePerCount, availableCoupon } = item;
    const price = pricePerCount * counts;
    if (availableCoupon === undefined)
      return acc + (price * (100 - rate)) / 100;
    return acc + price;
  }, 0);
};

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
      softPrice += price;
    } else {
      hardPrice += price;
    }
  }
  const appliedSoftPrice = (() => {
    const result = softPrice - amount;
    return result < 0 ? 0 : result;
  })();
  return appliedSoftPrice + hardPrice;
};

const applyCoupon = (items, coupons) => {
  return coupons.type === "rate"
    ? applyRateCoupon(coupons.discountRate, items)
    : applyAmountCoupon(coupons.discountAmount, items);
};

function Payment(props) {
  const { orderList } = props;
  const [coupons, setCoupons] = useState([]);
  const [discountType, setDiscountType] = useState(0);

  const selectedItem = orderList.filter((el) => el.selected === true);

  const getFinalPrice = (discountType) => {
    if (discountType === "1") {
      return applyCoupon(selectedItem, coupons[0]);
    } else if (discountType === "2") {
      return applyCoupon(selectedItem, coupons[1]);
    } else {
      return selectedItem.reduce(
        (acc, curr) => acc + curr.counts * curr.price,
        0
      );
    }
  };

  async function fetchCoupons() {
    try {
      // fetch data from a url endpoint
      const data = await axios.get(`${COUPONS_URL}`);
      setCoupons(data.data.coupons);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchCoupons();
  }, []);

  useEffect(() => {
    getFinalPrice(discountType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discountType]);

  return (
    <Container>
      <Title>Order Summary</Title>
      <Wrapper>
        <WrapperLine>
          <OrderContainer>
            <OrderTitle>
              <TitleBox>
                <TitleContents>총 주문 가격</TitleContents>
              </TitleBox>
            </OrderTitle>
            <OrderContents>
              <OrderBox>
                <OrderNumber>
                  {selectedItem
                    .reduce((acc, curr) => acc + curr.counts * curr.price, 0)
                    .toLocaleString()}
                  원
                </OrderNumber>
              </OrderBox>
            </OrderContents>
          </OrderContainer>
          <OrderContainer>
            <OrderTitle>
              <TitleBox>
                <TitleContents>쿠폰/할인 적용</TitleContents>
              </TitleBox>
            </OrderTitle>
            <OrderContents>
              <CouponContainer> 쿠폰을 선택 해주세요 </CouponContainer>
              <OptionContainer>
                <DropdownContainer>
                  <Dropdown>
                    <CouponTypeOptions
                      onChange={(e) => {
                        setDiscountType(e.target.value);
                      }}
                    >
                      <CouponType value="0">적용안함</CouponType>
                      <CouponType value="1">-10% 할인 쿠폰</CouponType>
                      <CouponType value="2">-10,000원 할인 쿠폰</CouponType>
                    </CouponTypeOptions>
                  </Dropdown>
                </DropdownContainer>
              </OptionContainer>
            </OrderContents>
          </OrderContainer>
          <OrderContainer>
            <OrderTitle>
              <TitleBox>
                <TitleContents>최종 결제 가격</TitleContents>
              </TitleBox>
            </OrderTitle>
            <OrderContents>
              <OrderBox>
                <OrderNumber>
                  {getFinalPrice(discountType).toLocaleString()}원
                </OrderNumber>
              </OrderBox>
            </OrderContents>
          </OrderContainer>
        </WrapperLine>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  orderList: state.orderList,
});

export default connect(mapStateToProps)(Payment);

const Container = styled.div`
  padding: 30px 0;
  padding-bottom: 70px;
  position: relative;
  max-width: 1500px;
  min-width: 900px;
  width: 100%;
  color: #0052db;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: #0052db;
  margin: 20px;
  margin-bottom: 40px;
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3.75%;
`;
const WrapperLine = styled.div`
  width: 100%;
  border: 2px solid #0052db;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

const OrderContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OrderTitle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  height: 80%;
`;

const TitleContents = styled.div`
  text-align: center;
`;

const OrderContents = styled.div`
  border-top: 2px solid #0052db;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OrderBox = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OrderNumber = styled.div`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
`;

const CouponContainer = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 3rem;
  margin-bottom: 5px;
`;

const OptionContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DropdownContainer = styled.div`
  width: 60%;
  height: 100%;
`;

const Dropdown = styled.div`
  height: 100%;
  line-height: 2.5rem;
  padding: 5px;
  border-bottom: 0;
  border: 2px solid #0052db;
  color: white;
  position: relative;
  opacity: 1;
  select {
    width: 100%;
    border: 0;
    font-size: 1rem;
    color: #0052db;
    background-color: transparent;
    padding-left: 5px;
    cursor: pointer;
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    font-style: italic;
  }
`;

const CouponTypeOptions = styled.select``;

const CouponType = styled.option``;
