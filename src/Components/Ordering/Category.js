import React from "react";
import styled from "styled-components";
function Category() {
  return (
    <Category_Container>
      <Cat>
        {/* <div className="slide-box d-dlex"> */}
        {/* <FastfoodIcon className="icon" /> */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/308/308099.png"
          width="20px"
          height="20px"
        />
        All
        {/* </div> */}
      </Cat>

      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/pizza.png" width="20px" height="20px" />
        Pizza
      </Cat>
      <Cat>
        <img src="../../../icons/noodles.png" width="20px" height="20px" />
        Noodles
      </Cat>
      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/pizza.png" width="20px" height="20px" />
        Pizza
      </Cat>
      <Cat>
        <img src="../../../icons/noodles.png" width="20px" height="20px" />
        Noodles
      </Cat>

      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/pizza.png" width="20px" height="20px" />
        Pizza
      </Cat>
      <Cat>
        <img src="../../../icons/noodles.png" width="20px" height="20px" />
        Noodles
      </Cat>
      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/pizza.png" width="20px" height="20px" />
        Pizza
      </Cat>
      <Cat>
        <img src="../../../icons/noodles.png" width="20px" height="20px" />
        Noodles
      </Cat>
      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/pizza.png" width="20px" height="20px" />
        Pizza
      </Cat>
      <Cat>
        <img src="../../../icons/noodles.png" width="20px" height="20px" />
        Noodles
      </Cat>
      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/hamburger.png" width="20px" height="20px" />
        Burger
      </Cat>
      <Cat>
        <img src="../../../icons/pizza.png" width="20px" height="20px" />
        Pizza
      </Cat>
      <Cat>
        <img src="../../../icons/noodles.png" width="20px" height="20px" />
        Noodles
      </Cat>
    </Category_Container>
  );
}

const Category_Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border: 1px solid black;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Cat = styled.div`
  flex: 0 0 auto;
  padding: 10px 20px;
  border: 1px solid black;
  height: 30px;
  margin-right: 10px;
  border-radius: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export default Category;
