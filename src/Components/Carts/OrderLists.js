import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  minusFromCart,
  removeFromOrderList,
  plusOrderCounts,minusOrderCounts,controlCheck,controlAllCheck
} from "../../Redux/Actions/index";
import Header from "../../Components/Header/Header";
import { CheckSquare } from "@styled-icons/boxicons-solid/CheckSquare";
import { Plus } from "@styled-icons/evaicons-solid/Plus";
import { Minus } from "@styled-icons/entypo/Minus";
import { CloseSquareOutline } from "@styled-icons/evaicons-outline/CloseSquareOutline";

const OrderList = (props) => {
  console.log('order',props)
  const { cartList, removeFromCart, orderList,minusOrderCounts, removeFromOrderList ,plusOrderCounts, controlCheck,controlAllCheck} = props;
  const [selected, setSelected] = useState(true);

  useEffect(()=>{
    checkSelectedStatus()
  }, [orderList])

  const handleMinus = (item) => {
    if(item.counts>1){
      minusOrderCounts(item)
    }
  }

  const handleRemove = (item) => {
    removeFromCart(item);
    removeFromOrderList(item)
  }

  const handleAllCheck = () => {
   setSelected(!selected)
   controlAllCheck(!selected)
    // setTopButton(!topButton)
  }

  const checkSelectedStatus = () => {
    const unSelectedNum = orderList.filter((el)=> el.selected === false).length
    
    if ( unSelectedNum !== 0 ){
        // 만약 하나라도 선택이 안되어 있을 경우
        setSelected(false)
      } else {
      ///  모두 선택되어 있을 경우
      setSelected(true)
    }
    console.log(orderList.filter((el)=> el.selected === false).length)
  }


  return (
    <Container>
      <Title>Your Shopping Cart</Title>
      <Wrapper>
        <WrapperLine>
          <TableContainer>
            <TableHead>
              <MenuTr>
                <CheckTh>
                  <CheckButtonBox onClick={() => { handleAllCheck(selected)}}>
                    <CheckedTopIcon style={ selected ? {color : "#0052db"} : {color : "gray" }}></CheckedTopIcon>
                  </CheckButtonBox>
                </CheckTh>
                <InfoTh>상품 정보</InfoTh>
                <CountsTh>상품 수량</CountsTh>
                <PriceTh>주문 금액</PriceTh>
                <RemoveTh></RemoveTh>
                
              </MenuTr>
            </TableHead>
            <TableBody>
                  <TableBodyTableRow>
                    <CheckTd>
                        <CheckButtonBox onClick={() => {}}>
                          <CheckedIcon style={{ color: "gray " }}></CheckedIcon>
                        </CheckButtonBox>
                    </CheckTd>
                    <InfoTd>
                    <ImgWrapper>
                       <ImgBox>
                          <Img src="https://cdn.class101.net/images/a363a069-5aaf-40cb-822e-a2cab585c37e"></Img>
                      </ImgBox>
                  </ImgWrapper>
                      <InfoContainer>
                        <InfoWrapper>   
                          <NameBox>
                          평범한 일상에 색을 더하는 시간, 자토의 아이패드 드로잉
                          </NameBox>
                        <PerPriceBox>4000원</PerPriceBox>
                        </InfoWrapper>
                      </InfoContainer>
                    </InfoTd>
                    <CountsTd>
                      <CountsContainer>
                        <CountsWrapper>
                          <MinusIcon></MinusIcon>
                          <CountsNumberBox>
                          <CountsNumber>3</CountsNumber>
                          </CountsNumberBox>
                          <PlusIcon></PlusIcon>
                        </CountsWrapper>
                      </CountsContainer>
                    </CountsTd>
                    <PriceTd>240,000원</PriceTd>
                    <RemoveTd>
                      <RemoveIcon></RemoveIcon>
                    </RemoveTd>

                  </TableBodyTableRow>
                );
              }
              {/* {orderList.map((item) => {
                return (
                  <TableBodyTableRow key={item.id}>
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
                    <PriceTd>{item.price * item.counts}</PriceTd>
                  </TableBodyTableRow>
                );
              })} */}
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
  controlAllCheck
})(OrderList);

const Container = styled.div` 
/* border:1px solid yellow; */
  padding-top: 30px;
  position: relative;
  max-width: 1500px;
  min-width: 900px;
  width: 100%;

`;
const Title = styled.div`
  font-size: 1.4rem;
  font-weight:200;
  color:#0052db;
  margin: 20px;
  margin-bottom: 40px;
  text-align:center;
  
`;
const Wrapper = styled.div`
  width: 100%;

  margin-bottom: 3.75%;
  /* border: 1px solid black; */
`;
const WrapperLine = styled.div`
  width: 100%;

`;

const TableContainer = styled.table`
  margin: 0 0 60px;
  width: 100%;
  color: #999;
  min-width: 900px;

`;

const TableHead = styled.thead`
  vertical-align: middle;
`;

const MenuTr = styled.tr`
 border-bottom: 4px solid  #0052db;
  font-size: 0.9rem;
  line-height: 3rem;
  font-weight: bold;
  color:#0052db;
`;

const CheckTh = styled.th`
  width: 5%;
  :hover {
    cursor: pointer;
  }
`;

const CheckButtonBox = styled.div`
`;


const CheckedTopIcon = styled(CheckSquare)`
  color: #0052db;
  width: 30px;
`;


const CheckedIcon = styled(CheckSquare)`
  color: #0052db;
  width: 30px;
`;

const InfoTh = styled.th`
  width: 60%;
`;

const CountsTh = styled.th`
`;

const PriceTh = styled.th`
`;

const TableBody = styled.tbody`
  vertical-align: middle;
`;

const TableBodyTableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const CheckTd = styled.td`
  vertical-align: middle;
  text-align:center;
  :hover {
    cursor: pointer;
  }
`;



const InfoTd = styled.td`
  vertical-align: middle;
  display: flex;
  flex-direction:row;
`;

const ImgWrapper = styled.div`
width: 40%;
padding:20px;
padding-left: 0;
`


const ImgBox = styled.div`
  position: relative;
  overflow: hidden;
  display: block;
  width: 100%;
  padding-top: 66.25%;
`

const Img = styled.img`
position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 100%;
  height: auto;
`


const InfoContainer = styled.div`
width: 60%;
display:flex;
flex-direction:column;
justify-content:center;
`

const InfoWrapper = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
padding-left: 8px;
`

const NameBox = styled.div`
font-size: 0.9rem;
margin-bottom : 10px;
color: black;
`

const PerPriceBox = styled.div`
font-size: 0.9rem;

`

const CountsTd = styled.td`
  vertical-align: middle;
`;

const CountsContainer= styled.div`
height: 100%;
width: 100%;
display:flex;
flex-direction:column;
justify-content:center;
`

const CountsWrapper= styled.div`
margin: 0 auto;
height: 40px;
width:80%;
border:2px solid #0052db;
display:flex;
flex-direction:row;
justify-content:space-between;
`
const CountsNumberBox = styled.div`
width: 20px;
display:flex;
flex-direction:column;
justify-content:center;
`

const CountsNumber =styled.div`
margin: 0 auto;
text-align:center;
font-size: 1rem;
color: #0052db;
`

const PlusIcon = styled(Plus)`
  color: #0052db;
  width: 25px;
  margin: 0 auto;

  :hover {
    cursor: pointer;
  }
`;

const MinusIcon = styled(Minus)`
  color: #0052db;
  width: 25px;
  margin: 0 auto;
  :hover {
    cursor: pointer;
  }
`;


const PriceTd = styled.td`
  vertical-align:middle;
  text-align:center;
  font-size: 1rem;
  color: #0052db;
`;

const RemoveIcon = styled(CloseSquareOutline)`
  color: #0052db;
  width: 30px;
  margin: 0 auto;
  :hover {
    cursor: pointer;
  }
`;
const RemoveTh = styled.th``

const RemoveTd = styled.td`
vertical-align:middle;
text-align:center;`