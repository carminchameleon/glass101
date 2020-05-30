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
  
  return (
    <>
    {data.map((item)=>{
      return (
        <ItemContainer key={item.id}>
      <ItemWrapper>
        <ImageContainer>
          <PhotoBox>
            <Photo src={item.coverImage} alt="ProductImg"></Photo>
          </PhotoBox>
        </ImageContainer>
        <InfoContainer>
          <InfoBox>
            <NameBox>{item.title}</NameBox>
            <PriceBox>
              <Price>{item.price.toLocaleString()}원</Price>
            </PriceBox>
          </InfoBox>
          <ButtonContainer>
          <ButtonBox>
            <Button>Add to Cart</Button>
          </ButtonBox>
          </ButtonContainer>
        </InfoContainer>
      </ItemWrapper>
      </ItemContainer>
  
      )
    })}
    </>
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


const ItemContainer = styled.li`
    padding-left: 35px;
    padding-bottom: 35px;
    width: 33.3%;
    display:flex;
    flex-direction:column;
    justify-content:start;
    margin-bottom:50px;
`
const ItemWrapper = styled.div`
     width:100%;
     display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
`

const ImageContainer = styled.div`
`

const PhotoBox = styled.div`
    overflow: hidden;
    display: block;
    width: 100%;
    border-radius:10px;
`

const Photo = styled.img`
    width:100%;
    object-fit: cover;
    transform: scale(1);
    transition : transform 1s;
    /* max-height: 450px; */


  :hover{ 
    transform: scale(1.1);
    transition : transform 1s;
  }   
`


const InfoContainer = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
   `

    const InfoBox = styled.div`
    padding: 20px;
    `
    const NameBox = styled.div`
    text-align:center;
    margin-bottom: 20px;
    font-size: 1rem;
    font-weight: bold;
    `

    const PriceBox = styled.div`
        display:flex;
        justify-content:center;
        flex-direction:row
    `
    const Price =  styled.div`
    font-size: 1.2rem;
    font-weight: 900;
    line-height:2rem;
    color: black;
`

const ButtonContainer = styled.div`
width:100%;
height: 50px;
display:flex;
flex-direction:column;
justify-content:center;
`

const ButtonBox= styled.div`
margin: 0 auto;
border:3px solid #0435f3;
width:40%;
height: 100%;
display:flex;
flex-direction:row;
justify-content:center;
border-radius: 20px;
`
const Button = styled.div`
font-size: 1rem;
line-height:3rem;
font-weight:400;
color:#0435f3;
`