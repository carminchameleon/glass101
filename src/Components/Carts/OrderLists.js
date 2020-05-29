import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  minusFromCart,
  removeFromOrderList,
  plusOrderCounts,minusOrderCounts,controlCheck
} from "../../Redux/Actions/index";
import Header from "../../Components/Header/Header";
import { CheckSquare } from "@styled-icons/boxicons-solid/CheckSquare";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import { Minus } from "@styled-icons/entypo/Minus";
import { CloseSquareOutline } from "@styled-icons/evaicons-outline/CloseSquareOutline";

const OrderList = (props) => {
  console.log('order',props)
  const { cartList, removeFromCart, orderList,minusOrderCounts, removeFromOrderList ,plusOrderCounts, controlCheck} = props;
  const [selectedItem, setSelectedItem] = useState(cartList);

  useEffect(() => {
  });

  const handleMinus = (item) => {
    if(item.counts>1){
      minusOrderCounts(item)
    }
  }

  const handleRemove = (item) => {
    removeFromCart(item);
    removeFromOrderList(item)
  }

  const addToOrderList = (item) => {
    console.log("add");
    console.log(item);
    setSelectedItem(selectedItem.push(item));
  };

  return (
    <Container>
      <Title>장바구니</Title>

      <Wrapper>
        <WrapperLine>
          <TableContainer>
            <TableHead>
              <MenuTr>
                <CheckTh>
                  <CheckButtonBox onClick={() => {}}>
                    <CheckedIcon></CheckedIcon>
                  </CheckButtonBox>
                </CheckTh>
                <InfoTh>상품 정보</InfoTh>
                <CountsTh>상품 수량</CountsTh>
                <PriceTh>주문 금액</PriceTh>
              </MenuTr>
            </TableHead>
            <TableBody>
              {orderList.map((item) => {
                return (
                  <TableBodyTableRow>
                    <CheckTd>
                   {item.selected ? (
                        <CheckButtonBox
                          onClick={() => {controlCheck(item)}}
                        >
                          <CheckedIcon></CheckedIcon>
                        </CheckButtonBox>
                      ) : (
                        <CheckButtonBox onClick={() => controlCheck(item)}>
                          <CheckedIcon style={{ color: "gray " }}></CheckedIcon>
                        </CheckButtonBox>
                      )}
                    </CheckTd>
                    <InfoTd>
                      <div>{item.title}</div>
                      <ImgWrapper>
                        <ProductImg src={item.coverImage}></ProductImg>
                      </ImgWrapper>
                      <button
                        onClick={() => {
                          handleRemove(item)
                        }}
                      >
                        <RemoveIcon></RemoveIcon>
                      </button>
                    </InfoTd>
                    <CountsTd>
                      <button onClick={() => {handleMinus(item)}}>
                        <MinusIcon></MinusIcon>
                      </button>
                      <div>{item.counts}</div>
                      <button onClick={() =>
                        plusOrderCounts(item)}>
                        <PlusIcon></PlusIcon>
                      </button>
                    </CountsTd>
                    <PriceTd>{item.price}</PriceTd>
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
  cartList: state.cartList,
  orderList : state.orderList
});

export default connect(mapStateToProps, {
  addToCart,
  removeFromCart,
  removeFromOrderList,
  plusOrderCounts,
  minusOrderCounts,
  controlCheck,
})(OrderList);

const Container = styled.div`
  padding-top: 30px;
  position: relative;
  max-width: 1500px;
  min-width: 900px;
  margin: 0 auto;
  padding: 0 50px 200px;
  border: 1px solid blue;
`;
const Title = styled.div`
  font-size: 1.9rem;
  margin: 20px;
`;
const Wrapper = styled.div`
  padding-top: 20px;
  margin-bottom: 3.75%;
  border: 1px solid black;
`;
const WrapperLine = styled.div`
  border-top: 4px solid #000;
  color: #4c4c4c;
  font-size: 12px;
`;

const TableContainer = styled.table`
  table-layout: fixed;
  margin: 0 0 60px;
  border-collapse: collapse;
  width: 100%;
  color: #999;
  min-width: 900px;
`;

const TableHead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

const MenuTr = styled.tr`
  line-height: 1.172em;
  color: #999;
  text-transform: uppercase;
  font-weight: 700;
  display: table-row;
  height: 30px;
  border-bottom: 1px solid #ddd;
  font: 1.2rem "Bebas Neue", cursive;
`;
const CheckTh = styled.th`
  border: 1px solid blue;
  width: 9%;
  white-space: nowrap;
  text-align: start;
  :hover {
    cursor: pointer;
  }
`;
const InfoTh = styled.th`
  border: 1px solid blue;
`;
const CountsTh = styled.th`
  border: 1px solid blue;
`;
const PriceTh = styled.th`
  border: 1px solid blue;
`;

const TableBody = styled.tbody``;

const TableBodyTableRow = styled.tr`
  height: 80px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

const CheckTd = styled.td`
  border: 1px solid blue;
  width: 9%;
  white-space: nowrap;
  text-align: start;
  :hover {
    cursor: pointer;
  }
`;
const InfoTd = styled.td`
  border: 1px solid blue;
`;
const CountsTd = styled.td`
  border: 1px solid blue;
  font-size: 16px;
  font-weight: 700;
`;
const PriceTd = styled.td`
  border: 1px solid blue;
`;

const ImgWrapper = styled.div`
  display: block;
  float: left;
  width: 110px;
  height: 110px;
  padding: 3px 25px 0 0;
`;

const ProductImg = styled.img`
    width:100%
    height:100%;
    `;

const CheckedIcon = styled(CheckSquare)`
  color: blue;
  width: 35px;
  margin: 0 auto;

  :hover {
    cursor: pointer;
  }
`;

const PlusIcon = styled(Plus)`
  color: blue;
  width: 35px;
  margin: 0 auto;

  :hover {
    cursor: pointer;
  }
`;

const MinusIcon = styled(Minus)`
  color: blue;
  width: 35px;
  margin: 0 auto;

  :hover {
    cursor: pointer;
  }
`;

const RemoveIcon = styled(CloseSquareOutline)`
  color: blue;
  width: 35px;
  margin: 0 auto;

  :hover {
    cursor: pointer;
  }
`;

const CheckButtonBox = styled.button`
  color: ${props => props.selected ? "white" : "palevioletred"};

  :hover {
    cursor: pointer;
  }
`;
