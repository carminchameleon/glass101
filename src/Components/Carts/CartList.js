import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  removeFromOrderList,
  plusOrderCounts,
  minusOrderCounts,
  controlCheck,
  controlAllCheck,
} from "Redux/Actions/index";
import styled from "styled-components";
import { CheckSquare } from "@styled-icons/boxicons-solid/CheckSquare";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import { Minus } from "@styled-icons/entypo/Minus";
import { CloseSquareOutline } from "@styled-icons/evaicons-outline/CloseSquareOutline";

const CartList = (props) => {
  const {
    removeFromCart,
    orderList,
    minusOrderCounts,
    removeFromOrderList,
    plusOrderCounts,
    controlCheck,
    controlAllCheck,
  } = props;

  const [selected, setSelected] = useState(true);

  const checkSelectedStatus = () => {
    const unSelectedNum = orderList.filter((el) => !el.selected).length;
    if (unSelectedNum !== 0) {
      // 만약 하나라도 선택이 안되어 있을 경우
      setSelected(false);
    } else {
      ///  모두 선택되어 있을 경우
      setSelected(true);
    }
  };

  useEffect(() => {
    checkSelectedStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderList]);

  const handleMinus = (item) => {
    if (item.counts > 1) {
      minusOrderCounts(item);
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item);
    removeFromOrderList(item);
  };

  const handleAllCheck = () => {
    setSelected(!selected);
    controlAllCheck(!selected);
  };

  return (
    <Container>
      <Title>Your Shopping Cart</Title>
      <Wrapper>
        <WrapperLine>
          <TableContainer>
            <TableHead>
              <MenuTr>
                <CheckTh>
                  <CheckButtonBox
                    onClick={() => {
                      handleAllCheck(selected);
                    }}
                  >
                    <CheckedTopIcon selected={selected}></CheckedTopIcon>
                  </CheckButtonBox>
                </CheckTh>
                <InfoTh>상품 정보</InfoTh>
                <CountsTh>상품 수량</CountsTh>
                <PriceTh>주문 금액</PriceTh>
                <RemoveTh />
              </MenuTr>
            </TableHead>
            <TableBody>
              {orderList.map((item) => {
                const checkStatus = (item) => {
                  return item.selected;
                };
                return (
                  <TableBodyTableRow key={item.id}>
                    <CheckTd>
                      <CheckButtonBox
                        onClick={() => {
                          controlCheck(item);
                        }}
                      >
                        <CheckedIcon inOrder={checkStatus(item)}></CheckedIcon>
                      </CheckButtonBox>
                    </CheckTd>
                    <InfoTd>
                      <ImgWrapper>
                        <ImgBox>
                          <Img src={item.coverImage}></Img>
                        </ImgBox>
                      </ImgWrapper>
                      <InfoContainer>
                        <InfoWrapper>
                          <NameBox>{item.title}</NameBox>
                          <PerPriceBox>
                            {item.price.toLocaleString()}원
                          </PerPriceBox>
                        </InfoWrapper>
                      </InfoContainer>
                    </InfoTd>
                    <CountsTd>
                      <CountsContainer>
                        <CountsWrapper>
                          <MinusIcon
                            onClick={() => {
                              handleMinus(item);
                            }}
                          ></MinusIcon>
                          <CountsNumberBox>
                            <CountsNumber>{item.counts}</CountsNumber>
                          </CountsNumberBox>
                          <PlusIcon
                            onClick={() => {
                              plusOrderCounts(item);
                            }}
                          ></PlusIcon>
                        </CountsWrapper>
                      </CountsContainer>
                    </CountsTd>
                    <PriceTd>
                      {(item.price * item.counts).toLocaleString()}원
                    </PriceTd>
                    <RemoveTd>
                      <RemoveIcon
                        onClick={() => {
                          handleRemove(item);
                        }}
                      ></RemoveIcon>
                    </RemoveTd>
                  </TableBodyTableRow>
                );
              })}
            </TableBody>
          </TableContainer>
        </WrapperLine>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  orderList: state.orderList,
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  removeFromOrderList,
  plusOrderCounts,
  minusOrderCounts,
  controlCheck,
  controlAllCheck,
})(CartList);

const Container = styled.div`
  padding-top: 30px;
  position: relative;
  max-width: 1500px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  color: #0052db;
  margin: 20px;
  margin-bottom: 40px;
  text-align: center;
  @media only screen and (max-width: 479px) {
    font-size: 1rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3.75%;
`;

const WrapperLine = styled.div`
  width: 100%;
`;

const TableContainer = styled.table`
  margin: 0 0 60px;
  width: 100%;
  color: #999;
  min-width: 400px;
`;

const TableHead = styled.thead`
  vertical-align: middle;
`;

const MenuTr = styled.tr`
  border-bottom: 1px solid #0052db;
  font-size: 0.9rem;
  line-height: 3rem;
  font-weight: bold;
  color: #0052db;
  @media only screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;

const CheckTh = styled.th`
  width: 5%;
`;

const CheckButtonBox = styled.div``;

const CheckedTopIcon = styled(CheckSquare)`
  width: 30px;
  color: ${(props) => (props.selected ? "#0052db" : "gray")};
  opacity: ${(props) => (props.selected ? 1 : 0.6)};

  :hover {
    cursor: pointer;
    color: #b47af3;
    transition: all 190ms ease-out 0s;
  }
  @media only screen and (max-width: 479px) {
    width: 20px;
  }
`;

const CheckedIcon = styled(CheckSquare)`
  color: ${(props) => (props.inOrder ? "#0052db" : "gray")};
  opacity: ${(props) => (props.inOrder ? 1 : 0.6)};
  width: 30px;

  :hover {
    cursor: pointer;
    color: #b47af3;
    transition: all 190ms ease-out 0s;
  }
  @media only screen and (max-width: 479px) {
    width: 20px;
  }
`;

const InfoTh = styled.th`
  width: 65%;
`;

const CountsTh = styled.th``;

const PriceTh = styled.th``;

const TableBody = styled.tbody`
  vertical-align: middle;
`;

const TableBodyTableRow = styled.tr`
  border-bottom: 1px solid #0052db;
  @media only screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;

const CheckTd = styled.td`
  vertical-align: middle;
  text-align: center;
  :hover {
    cursor: pointer;
    color: #b47af3;
    transition: all 190ms ease-out 0s;
  }
`;

const InfoTd = styled.td`
  vertical-align: middle;
  display: flex;
  flex-direction: row;
`;

const ImgWrapper = styled.div`
  width: 40%;
  padding: 20px;
  padding-left: 0;
`;

const ImgBox = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  padding-top: 56.25%;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  height: auto;
`;

const InfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 8px;
`;

const NameBox = styled.div`
  font-size: 0.9rem;
  color: black;
  @media only screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;

const PerPriceBox = styled.div`
  font-size: 0.9rem;
  @media only screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;

const CountsTd = styled.td`
  vertical-align: middle;
`;

const CountsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountsWrapper = styled.div`
  margin: 0 auto;
  height: 40px;
  width: 80%;
  border: 2px solid #0052db;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CountsNumberBox = styled.div`
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CountsNumber = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  color: #0052db;
  @media only screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;

const PlusIcon = styled(Plus)`
  color: #0052db;
  width: 25px;
  margin: 0 auto;

  :hover {
    cursor: pointer;
    color: #b47af3;
    transition: all 190ms ease-out 0s;
  }
  @media only screen and (max-width: 479px) {
    width: 15px;
  }
`;

const MinusIcon = styled(Minus)`
  color: #0052db;
  width: 25px;
  margin: 0 auto;
  :hover {
    cursor: pointer;
    color: #b47af3;
    transition: all 190ms ease-out 0s;
  }
  @media only screen and (max-width: 479px) {
    width: 15px;
  }
`;

const PriceTd = styled.td`
  vertical-align: middle;
  text-align: center;
  font-size: 1rem;
  color: #0052db;
  @media only screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 479px) {
    font-size: 0.6rem;
  }
`;

const RemoveIcon = styled(CloseSquareOutline)`
  color: #0052db;
  width: 30px;
  margin: 0 auto;
  :hover {
    cursor: pointer;
    color: #b47af3;
    transition: all 190ms ease-out 0s;
  }
  @media only screen and (max-width: 479px) {
    width: 15px;
  }
`;
const RemoveTh = styled.th``;

const RemoveTd = styled.td`
  vertical-align: middle;
  text-align: center;
`;
