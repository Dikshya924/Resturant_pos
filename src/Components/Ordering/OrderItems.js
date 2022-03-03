import React, { useState } from "react";
import styled from "styled-components";
import IndeterminateCheckBoxSharpIcon from "@material-ui/icons/IndeterminateCheckBoxSharp";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import { useStateValue } from "../../stateProvider";
import { green } from "@material-ui/core/colors";
function OrderItems({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <Order>
      <Item__detail>
        <img src={img} />
        <Info>
          <p>{title}</p>
          <p>Rs. {price}</p>
        </Info>
      </Item__detail>
      <Pricing>
        <p className="quantity">
          <AddBoxRoundedIcon className="icon" onClick={increment} />
          {count}
          <IndeterminateCheckBoxSharpIcon
            className="icon"
            onClick={decrement}
          />
        </p>
        <p style={{ color: green[300]}}>Rs{price * count}</p>
        <Item__remove onClick={removeItem}>Remove</Item__remove>
      </Pricing>
    </Order>
  );
}
const Order = styled.div`
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 20px;
  padding: 15px;
  display: flex;
`;
// const Order_Item = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const Item__info = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* margin-top: 10px;
//   margin-bottom: 10px; */
// `;
const Item__detail = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
const Info = styled.div``;
const Item__remove = styled.div`
  color: rgb(188, 5, 69);
  cursor: pointer;
`;
const Pricing = styled.div`
  width: 20%;
  text-align: center;
  .quantity {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .icon {
    border-radius: 50%;
    color: #2c586e;
  }
`;

export default OrderItems;
