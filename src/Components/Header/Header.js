import React from "react";
import styled from "styled-components";
import { Cart } from "@styled-icons/evil/Cart";
import {connect} from 'react-redux';
import { RouteComponentProps,withRouter } from 'react-router-dom';
import { History, LocationState } from 'history';

  function Header(props){
    const { cartItems, history } = props;
    console.log('Header 확인', props)

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <TitleWrapper onClick={()=>(history.push('/'))}>
            <Title >CLASS 202</Title>
            </TitleWrapper>
        </TitleContainer>
        <IconContainer onClick={()=>(history.push('/cart'))}>
          <CartIcon/>
              <ProductNumber>{cartItems.length} </ProductNumber>
        </IconContainer>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartItems : state.cart.items
})

export default withRouter(connect ( mapStateToProps )(Header));


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

const TitleWrapper = styled.div``

const Title = styled.button`
  font-size: 3rem;
  color: white;
  text-align: center;
`;

const IconContainer = styled.button`
  position: absolute;
  bottom: 10px;
  right: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
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
