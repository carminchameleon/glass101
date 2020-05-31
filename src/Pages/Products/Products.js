import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { productItems } from "./productItems";
import Items from "Components/Products/Items";
import PageNation from "Components/Products/PageNation";
import Cart from "Pages/Cart/Cart";

function SortItem(arr) {
  const newArr = arr.slice();
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
      <Header></Header>
      <Section>
        <MainTitleContainer>
          <MainTitle>클래스 IOI, 준비물까지 챙겨주는 온라인 클래스</MainTitle>
        </MainTitleContainer>
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
  font-family: "Gothic A1", sans-serif;
`;

const Section = styled.section`
  padding-top: 130px;
  position: relative;
  width: 100%;
  max-width: 1405px;
  margin: 0 auto;
  padding-left: 96px;
  padding-right: 96px;
  clear: both;
`;
const MainTitleContainer = styled.div`
  padding: 20px 0;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 66px;
  padding-right: 66px;
`;

const MainTitle = styled.div`
  padding: 30px 0;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 36px;
  padding-right: 36px;
  font-size: 1rem;
  color: #0435f3;
  background-color: #f8f8f8;
  font-weight: bold;
`;

const ItemContainer = styled.div`
  position: relative;
  /* width: 1905px; */
  max-width: 100%;
  margin: 0 auto;
  padding-left: 66px;
  padding-right: 66px;
  clear: both;
`;
const ItemWrapper = styled.div`
  clear: both;
  margin-left: -35px;
`;

const ItemBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
