import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { RemoveShoppingCart } from "@styled-icons/material-outlined/RemoveShoppingCart";
import { AddShoppingCart } from "@styled-icons/material-rounded/AddShoppingCart";
import { connet } from "react-redux";
import {
  addToCart,
  removeFromCart,
  addToOrderList,
  removeFromOrderList,
} from "../../Redux/Actions/index";
import { cloneDeep } from "lodash";

const Items = (props) => {
  const {
    data,
    cartList,
    addToCart,
    removeFromCart,
    addToOrderList,
    removeFromOrderList,
  } = props;

  const [cart, setCart] = useState([]);

  const handleAddCart = (item) => {
    console.log(item)
    if (cartList.length < 3) {
      addToCart(item);
      let clonedItem = cloneDeep(item);
      addToOrderList(clonedItem);
    } else {
      alert("아이템이 꽉찼습니다.");
    }
  };

  const handleRemoveCart = (item) => {
    removeFromCart(item);
    removeFromOrderList(item);
  };
  
  // 카트 안에 있는 아이템인지 아닌지 확인
  // const checkCartIn = (item) => {
  //    return (productItems.filter(product => product.id === item.id).length === 0)
  // }

  return (
    <Container>
      <Wrapper>
        <Header>상품 List</Header>
        <ProductContainer>
          <ProductWrapper>
            {data.map((item) => {
              return (
                <ProductBox key={item.id}>
                  <ImageContainer>
                    <ImageWrapper>
                      <Image src={item.coverImage} alt="ProductImg"></Image>
                    </ImageWrapper>
                  </ImageContainer>
                  <NameContainer>
                    <NameWrapper>
                      <Name>{item.title}</Name>
                    </NameWrapper>
                  </NameContainer>
                  <PriceContainer>
                    <PriceWrapper>
                      <Price>{item.price.toLocaleString()}원</Price>
                    </PriceWrapper>
                  </PriceContainer>
                  {cartList.filter((product) => product.id === item.id)
                    .length === 0 ? (
                    <CartContainer>
                      <CartWrapper>
                        <CartTextBox onClick={() => handleAddCart(item)}>
                          Add To Cart
                        </CartTextBox>
                      </CartWrapper>
                    </CartContainer>
                  ) : (
                    <CartContainer>
                      <CartWrapper>
                        <CartTextBox onClick={() => handleRemoveCart(item)}>
                          Remove From Cart
                        </CartTextBox>
                      </CartWrapper>
                    </CartContainer>
                  )}
                </ProductBox>
              );
            })}
          </ProductWrapper>
        </ProductContainer>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cartList: state.cartList,
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  addToOrderList,
  removeFromOrderList,
})(Items);

const Container = styled.div`
  max-width: 1300px;
  height: 400px;
  padding: 0 50px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 20px 0;
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #000;
`;

const ProductContainer = styled.div`
  margin-top: 30px;
  height: 300px;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProductBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 224px;
  position: relative;
`;

const ImageContainer = styled.div``;

const ImageWrapper = styled.div``;

const Image = styled.img`
  min-height: 184px;
  :hover {
    /* transform: scale(1.2); */
    transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
  }
`;

const NameContainer = styled.div`
  margin-top: 15px;
`;
const NameWrapper = styled.div``;
const Name = styled.div`
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  letter-spacing: -0.15px;
  color: rgb(27, 28, 29);
  height: 40px;
  margin: 0px 0px 6px;
`;

const PriceContainer = styled.div``;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Price = styled.div`
  font-size: 1rem;
  font-weight: bold;
  font-family: "Bebas Neue", cursive;
`;

const IconWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`;

export const RemoveIcon = styled(RemoveShoppingCart)`
  color: yellow;
  width: 20px;
  height: 20px;
  margin: 0 auto;
`;

export const AddIcon = styled(AddShoppingCart)`
  color: yellow;
  width: 25px;
  margin: 0 auto;
`;

const CartContainer = styled.div`
  width: 100%;
  background-color: black;
  margin-top: 10px;
  height: 35px;
`;

const CartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CartTextBox = styled.button`
  color: yellow;
  font-size: 1rem;
  letter-spacing: 3px;
  font-family: "Bebas Neue", cursive;
  line-height: 2.4rem;
  :hover {
    cursor: pointer;
  }
`;
