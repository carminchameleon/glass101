import React from "react";
import styled from "styled-components";

const PageNation = (props) => {
  const { totalProductsNumber, productsPerPage, paginate } = props;
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
            return (
              <Number key={num} onClick={() => paginate(num)}>
                {num}
              </Number>
            );
          })}
        </NumberBox>
      </Wrapper>
    </Container>
  );
};

export default PageNation;

const Container = styled.div`
  width: 100%;
  padding-top: 50px;
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
  border-top: 4px solid #0052db;
`;

const Number = styled.button`
  font-size: 3.5rem;
  font-weight: bold;
  color: #0052db;

  :hover {
    cursor: pointer;
    color: #006db3;
  }
`;
