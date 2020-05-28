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
      <Body>
        <Items
          data={currentProducts}
        ></Items>
        <PageNation
          productsPerPage={productsPerPage}
          totalProductsNumber={data.length}
          paginate={paginate}
        ></PageNation>
      </Body>
      <Cart></Cart>
    </Container>
  );
};
export default Product;

const Container = styled.div`
  width: 100%;
  height: 200vh;
  border: 1px solid black;
`;

const Body = styled.section`
  width: 100%;
  height: 500px;
`;

const OrderList = styled.div`
  width: 100%;
  height: 700px;
`;
