import React, { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCT_LIST_URL } from "config";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import Items from "Components/Products/Items";
import Pagination from "Components/Products/Pagination";

function sortItem(arr) {
  const clonedArr = arr.slice();
  const result = clonedArr.sort(function (a, b) {
    return a.score < b.score ? 1 : -1;
  });
  return result;
}

const Product = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  // get current posts
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = data.slice(indexOfFirstPost, indexOfLastPost);

  async function fetchProductList() {
    try {
      // fetch data from a url endpoint
      const data = await axios.get(`${PRODUCT_LIST_URL}`);
      setData(sortItem(data.data.productItems));
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchProductList();
  }, []);

  //Change Page
  // paginate에서 숫자를 넘겨 받으면, 그 인덱스가 setCurrentPage로 들어감
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
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
        <Pagination
          productsPerPage={productsPerPage}
          totalProductsNumber={data.length}
          paginate={paginate}
          currentPage={currentPage}
        ></Pagination>
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
  font-weight: 500;
  color: #0052db;
  margin: 20px;
  margin-bottom: 40px;
  text-align: center;
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
