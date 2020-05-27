import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { productItems } from "./productItems";
import Items from "Components/Products/Items";
import PageNation from "Components/Products/PageNation";
import Cart from "Pages/Cart/Cart";

function SortItem(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));
  const result = newArr.sort(function (a, b) {
    return a.score < b.score ? 1 : -1;
  });
  return result;
}

const Product = () => {
  const [data, setData] = useState(SortItem(productItems));
  const [cartItems , setCartItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(()=>{
   checkLocalItem()
  },[])
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


  const checkLocalItem = () => {
   if(localStorage.getItem('cartItems')){
     setCartItems(JSON.parse(localStorage.getItem('cartItems')))
   } 
  }

  const handleAddToCart = ( product ) => {    
    const newCart = cartItems.slice()
    // 장바구니에 있는지 없는지를 체크
    let productAlreadyIncart = false;
    cartItems.forEach(item => {
      if(item.id === product.id){
      productAlreadyIncart = true;
      item.count++
    }        
    });
    if(!productAlreadyIncart){
      newCart.push({...product, count : 1})
  }
    localStorage.setItem("cartItems",JSON.stringify(newCart))
    return setCartItems(newCart)
  }

  const removeFromCart = ( product ) => {
    const NewCartItems = cartItems.filter( item => item.id !== product.id);
    localStorage.setItem('cartItems', NewCartItems )
    return setCartItems(NewCartItems)
  }


  return (
    <Container>
      <Header cartItems = {cartItems}></Header>
      <Body>
        <Items  cartItems = {cartItems} data={currentProducts} handleAddToCart={handleAddToCart}></Items>
        <PageNation
          productsPerPage={productsPerPage}
          totalProductsNumber={data.length}
          paginate={paginate}
        ></PageNation>
      </Body>
      <Cart cartItems = {cartItems} removeFromCart={removeFromCart} ></Cart>
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
  height: 500px;
`;

const OrderList = styled.div`
width: 100%;
height :700px;
`