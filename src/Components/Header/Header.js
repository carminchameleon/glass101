import React from "react";
import styled from "styled-components";
import { Cart } from "@styled-icons/evil/Cart";
import {connect} from 'react-redux';
import { RouteComponentProps,withRouter } from 'react-router-dom';
import { History, LocationState } from 'history';

  function Header(props){
    const { cartList, history } = props;
    
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <Title onClick={()=>(history.push('/'))}>GLASS I0I</Title>
        </TitleContainer>
        <CartContainer>
          <CartWrapper onClick={()=>(history.push('/cart'))}>
              <CartIcon></CartIcon>
              <CartCountsWrapper>
                   <CartCounts>{cartList.length}</CartCounts>
              </CartCountsWrapper>
          </CartWrapper>
        </CartContainer>
      </Wrapper>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartList : state.cartList
})

export default withRouter(connect ( mapStateToProps )(Header));


const Container = styled.div`
  width: 100%;
  height: 120px;
  font-family: 'Gothic A1', sans-serif;
  position:fixed;
  z-index:10;
  background-color:white;
  border-bottom: 4px solid #0052db;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const TitleContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:row;
`;

const Title = styled.div`
  font-size: 3rem;
  letter-spacing:0.1rem;
  color: #0052db;

  text-align: center;
  font-weight:900;
  :hover {
    cursor: pointer;
 
  }

`;

const CartContainer = styled.div`
width: 400px;
height: 50px;
position: absolute;
right: 5%;
display:flex;
flex-direction:column;
justify-content:center;
`

const CartWrapper = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:row;
justify-content:flex-end;
`

export const CartIcon = styled(Cart)`
  color: #0052db;
  height: 45px;
  :hover {
    color: #54a1a2;
    cursor: pointer;
    transition: all 180ms ease-out 0s;
  }
`;

const CartCountsWrapper = styled.div`
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
`

const CartCounts = styled.div`
   font-size: 1.3rem;
   font-weight: 900;
   color: #0052db;
   line-height:1.5rem;
   :hover {
    color: #54a1a2;
    cursor: pointer;
    transition: all 180ms ease-out 0s;
  }
`