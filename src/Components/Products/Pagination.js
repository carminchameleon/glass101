import React from "react";
import styled from "styled-components";

const Pagination = (props) => {
  console.log(props);
  const { totalProductsNumber, productsPerPage, paginate, currentPage } = props;
  const pageNumbers = [];

  // 전체의 포스트 중에서 한번에 보여주어야 하는 페이지만. 100개 인데, 한번에 보여주고 싶은게 10개라면, 10개의 인덱스 리스트가 생김
  for (let i = 1; i <= Math.ceil(totalProductsNumber / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <Wrapper>
        <NumberBox>
          {pageNumbers.map((num) => {
            const pageCheck = (num) => {
              return currentPage === num;
            };
            return (
              <Number
                currentPage={pageCheck(num)}
                key={num}
                onClick={() => paginate(num)}
              >
                {num}
              </Number>
            );
          })}
        </NumberBox>
      </Wrapper>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NumberBox = styled.div`
  padding: 5px;
  border: 2px solid #0052db;
  :hover {
    cursor: pointer;
    border: 2px solid #006db3;
    transition: all 190ms ease-out 0s;
  }
`;

const Number = styled.button`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => (props.currentPage ? "#b47af3" : "#0052db")};
  :hover {
    cursor: pointer;
    color: #006db3;
    transition: all 190ms ease-out 0s;
  }
`;
