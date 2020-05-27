import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { productItems } from "./productItems";
import Items from "Components/Products/Items";
import PageNation from "Components/Products/PageNation";

function SortItem(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));
  const result = newArr.sort(function (a, b) {
    return a.score < b.score ? 1 : -1;
  });
  return result;
}

const Product = () => {
  const [data, setData] = useState(SortItem(productItems));
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  // get current posts
  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  const currentProducts = data.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page
  // paginate에서 숫자를 넘겨 받으면, 그 인덱스가 setCurrentPage로 들어감
  const paginate = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Header></Header>
      <Body>
        <Items data={currentProducts}></Items>
        <PageNation
          productsPerPage={productsPerPage}
          totalProductsNumber={data.length}
          paginate={paginate}
        ></PageNation>
      </Body>
    </Container>
  );
};
export default Product;

const Container = styled.div`
  width: 100%;
  height: 200vh;
  border: 1px solid black;
`;

const Body = styled.body`
  width: 100%;
  height: 80%;
`;
