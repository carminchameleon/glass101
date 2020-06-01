import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Cart } from "@styled-icons/evil/Cart";

function Header(props) {
  const { cartList, history } = props;

  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <TitleLogo
            onClick={() => history.push("/")}
            src="https://images.velog.io/images/carminchameleon/post/490f7d1f-f8a8-46d7-890e-8c6523455cd0/image.png"
          ></TitleLogo>
        </TitleContainer>
        <CartContainer>
          <CartWrapper onClick={() => history.push("/cart")}>
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

const mapStateToProps = (state) => ({
  cartList: state.cartList,
});

export default withRouter(connect(mapStateToProps)(Header));

const Container = styled.div`
  width: 100%;
  height: 70px;
  font-family: "Gothic A1", sans-serif;
  position: fixed;
  z-index: 10;
  background-color: white;
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
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const TitleLogo = styled.img`
  width: 300px;
  height: auto;
  :hover {
    cursor: pointer;
  }
`;

const CartContainer = styled.div`
  width: 400px;
  height: 50px;
  position: absolute;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CartWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CartIcon = styled(Cart)`
  color: #0052db;
  height: 45px;
  :hover {
    color: #b47af3;
    cursor: pointer;
    transition: all 190ms ease-out 0s;
  }
`;

const CartCountsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CartCounts = styled.div`
  font-size: 1rem;
  font-weight: 900;
  color: #0052db;
  line-height: 1.5rem;
  :hover {
    color: #b47af3;
    cursor: pointer;
    transition: all 190ms ease-out 0s;
  }
`;
