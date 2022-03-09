import React, { useState } from "react";
import styled from "styled-components";
import IndeterminateCheckBoxSharpIcon from "@material-ui/icons/IndeterminateCheckBoxSharp";
import AddBoxRoundedIcon from "@material-ui/icons/AddBoxRounded";
import CloseIcon from "@material-ui/icons/Close";
import { useStateValue } from "../../stateProvider";
import { green } from "@material-ui/core/colors";
function OrderItems({ id, img, title, price }) {
  const [{ basket }, dispatch] = useStateValue();
  const [count, setCount] = useState(1);
  const [cost, setCost] = useState(price);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(Math.max(count - 1, 1));
  };
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setCost(value);
  };
  return (
    <Order>
      <Item__detail>
        <img src={img} />
        <Info>
          <p>{title}</p>
          <form>
            Rs.
            <input type="text" defaultValue={price} onChange={handleChange} />
          </form>
        </Info>
      </Item__detail>
      <Pricing>
        <Counter>
          <AddBoxRoundedIcon className="icon" onClick={increment} />
          <input type="text" value={count} />
          <IndeterminateCheckBoxSharpIcon
            className="icon"
            onClick={decrement}
          />
        </Counter>
        <p style={{ color: green[300] }}>Rs{cost * count}</p>
      </Pricing>
      <Item__remove>
        <CloseIcon onClick={removeItem} className="delete" />
      </Item__remove>
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
const Info = styled.div`
  input {
    width: 60px;
    height: 30px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
`;
const Item__remove = styled.div`
  color: rgb(188, 5, 69);
  cursor: pointer;
`;
const Pricing = styled.div`
  width: 30%;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  input {
    width: 30px;
    height: 30px;
    text-align: center;
    border: 1px solid rgba(0, 0, 0, 0.06);
  }
  .icon {
    border-radius: 60%;
    color: #8da1af;
    width: 30px;
    height: 30px;
  }
`;
const Counter = styled.div`
  display: flex;
`;
export default OrderItems;
