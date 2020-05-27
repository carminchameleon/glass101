import React from "react";
import styled from "styled-components";
import { Cart } from "@styled-icons/evil/Cart";

  function Header(props){
    const { cartItems} = props
    console.log('Header 확인', props)

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
            <Title>CLASS 202</Title>
        </TitleContainer>
        <IconContainer>
          <CartIcon/>
              <ProductNumber>{cartItems.length}</ProductNumber>
          <BasketIcon>
            <Cart></Cart>
          </BasketIcon>
        </IconContainer>
      </Wrapper>
    </Container>
  );
}


export default Header;


const Container = styled.div`
  width: 100%;
  height: 200px;
  font-family: "Bebas Neue", cursive;
  color: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const TitleContainer = styled.div``;

const Title = styled.div`
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const BasketIcon = styled.span`
  font-size: 2.5rem;
`;

const ProductNumber = styled.div`
  font-size: 1.3rem;
  color: yellow;
  line-height: 3rem;
  margin-right: 10px;
`;

const IconTitle = styled.div`
  font-size: 1.5rem;
  line-height: 3rem;
`;

export const CartIcon = styled(Cart)`
  color: white;
  width: 35px;
  margin: 0 auto;
`;
