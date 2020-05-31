import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
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
      {data.map((item) => {
        const cartCheck = (item) => {
          return (
            cartList.filter((product) => product.id === item.id).length !== 0
          );
        };
        return (
          <ItemContainer key={item.id}>
            <ItemWrapper
              onClick={() => {
                cartCheck(item) ? handleRemoveCart(item) : handleAddCart(item);
              }}
            >
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
                  <ButtonBox
                    onClick={() => handleAddCart(item)}
                    inCart={cartCheck(item)}
                  >
                    <Button inCart={cartCheck(item)}>
                      {cartCheck(item) ? "Remove From Cart" : "Add To Cart"}
                    </Button>
                  </ButtonBox>
                </ButtonContainer>
              </InfoContainer>
            </ItemWrapper>
          </ItemContainer>
        );
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 50px;
  :hover {
    cursor: pointer;
  }
`;
const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;

const ImageContainer = styled.div``;

const PhotoBox = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  border-radius: 10px;
  padding-top: 56.25%;
`;

const Photo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  height: auto;

  :hover {
    transform: scale(1.1);
    transition: transform 1s;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;

const InfoBox = styled.div`
  padding: 20px;
`;
const NameBox = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
  font-weight: 400;
  color: #0052db;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const Price = styled.div`
  font-size: 0.9rem;
  font-weight: 200;
  line-height: 2rem;
  color: #0052db;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ButtonBox = styled.div`
  margin: 0 auto;

  border: 3px solid ${(props) => (props.inCart ? "#b47af3" : "#0052db")};
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 20px;
  background-color: ${(props) => (props.inCart ? "#b47af3" : "white")};

  :hover {
    cursor: pointer;
    border: 3px solid #b47af3;
    color: #b47af3;
    transition: all 300ms ease-out 0s;
  }
`;

const Button = styled.div`
  text-align: center;
  font-size: 0.7rem;
  line-height: 2rem;
  font-weight: 600;
  color: ${(props) => (props.inCart ? "white" : "#0052db")};
`;
