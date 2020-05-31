import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { productItems } from "./productItems";
import Items from "Components/Products/Items";
import PageNation from "Components/Products/PageNation";
import Footer from "../../Components/Footer/Footer";

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

  return (
    <Container>
      <Header></Header>
      <Section>
        <MainTitleContainer>
          <Title>Shopping List</Title>
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
  font-family: "Gothic A1", sans-serif;
`;

const Section = styled.section`
  padding-top: 100px;
  position: relative;
  width: 100%;
  max-width: 1405px;
  margin: 0 auto;
  padding-left: 96px;
  padding-right: 96px;
`;
const MainTitleContainer = styled.div`
  padding: 20px 0;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 66px;
  padding-right: 66px;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 200;
  color: #0052db;
  margin: 20px;
  margin-bottom: 40px;
  text-align: center;
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
