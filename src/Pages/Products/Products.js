import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { productItems } from "./productItems";
import Items from "Components/Products/Items";
import PageNation from "Components/Products/PageNation";
import Cart from "Pages/Cart/Cart";

function SortItem(arr) {
  const newArr = arr.slice()
  const result = newArr.sort(function (a, b) {
    return a.score < b.score ? 1 : -1;
  });
  return result;
}

const Product = () => {
  const [data, setData] = useState(productItems);
  const [cartItems, setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  // get current posts
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = data.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  // paginate에서 숫자를 넘겨 받으면, 그 인덱스가 setCurrentPage로 들어감
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const checkLocalItem = () => {
    if (localStorage.getItem("cartItems")) {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")));
    }
  };


  return (
    <Container>
      <Header cartItems={cartItems}></Header>
      <Section>
        <MainTitle>글래스 IOI, 준비물까지 챙겨주는 온라인 클래스</MainTitle>
        <ItemContainer>
          <ItemWrapper>
            <ItemBox>
            <Items data={currentProducts}></Items>
            </ItemBox>
         

          </ItemWrapper>
        </ItemContainer>        
        <PageNation
          productsPerPage={productsPerPage}
          totalProductsNumber={data.length}
          paginate={paginate}
        ></PageNation>
      </Section>
    </Container>
  );
};
export default Product;

const Container = styled.div`
  width: 100%;
  height: 200vh;
  font-family: 'Gothic A1', sans-serif;
  background-color:white;

`;

const Section = styled.section`
    padding-top: 130px;
    position: relative;
    width: 1905px;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 66px;
    padding-right: 66px;
    clear: both;
    border:1px solid black;
`;

const MainTitle = styled.div`
    padding: 40px 0;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 66px;
    padding-right: 66px;
    font-size: 1.4rem;
    color: blue;
    font-weight:bold;
  `

  const ItemContainer = styled.div`
    position: relative;
    width: 1905px;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 66px;
    padding-right: 66px;
    clear: both;
     `

  const ItemWrapper = styled.div`
    clear: both;
    margin-left: -35px;
  `

  const ItemBox = styled.ul`
   width: 100%;
  display:flex;
  flex-direction:row;
  flex-wrap: wrap;
  justify-content:flex-start;`