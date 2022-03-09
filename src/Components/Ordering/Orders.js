import { green } from "@material-ui/core/colors";
import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import styled from "styled-components";
import { useStateValue } from "../../stateProvider";
import OrderItems from "./OrderItems";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Slide, Fade } from "@material-ui/core";
function Orders() {
  const [{ basket }, dispatch] = useStateValue();
  const [showTotal, setShowTotal] = useState(false);
  return (
    <Order_data>
      <Order_type>
        <h4>#orders 1234</h4>
        <select>
          <option>Table no: 12</option>
          <option>Table no: 12</option>
          <option>Table no: 12</option>
        </select>
        <select>
          <option>Dine In</option>
          <option>Take away</option>
          <option>Delivery</option>
        </select>
      </Order_type>
      <Items>
        <Scrollbars>
          {basket.map((item) => (
            <OrderItems
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
            />
          ))}
        </Scrollbars>
      </Items>
      <Sub_button>
        {showTotal ? (
          <Fade
            direction="up"
            in={showTotal}
            style={{ transitionDelay: showTotal ? "100ms" : "0ms" }}
          >
            <Subtotal>
              <p>
                Subtotal <span>Rs 1000</span>
              </p>
              <p>
                Discount 10% <span>Rs. 100</span>
              </p>
              <p>
                Service charge 10%<span>Rs. 100</span>
              </p>

              <p>
                Tax 10% (VAT included) <span>Rs. 100</span>
              </p>
            </Subtotal>
          </Fade>
        ) : null}

        <button className="total " onClick={() => setShowTotal(!showTotal)}>
          <span className="px-3" style={{ fontSize: 16, fontWeight: 600 }}>
            Grand Total: <span style={{ color: green[300] }}> Rs. 1100</span>
          </span>
          <i className="pi pi-angle-up px-2"></i>
        </button>
        <button>Place Order</button>
      </Sub_button>
    </Order_data>
  );
}
const Order_data = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Order_type = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  padding: 10px;
  justify-content: space-between;
  select {
    border: 1px solid #2c586e;
    padding: 5px;
    height: 35px;
  }
`;
const Items = styled.div`
  width: 100%;
  height: 70%;
  max-height: 70%;
  min-height: 45%;
  padding: 15px 15px 0px;
`;
const Subtotal = styled.div`
  justify-content: space-between;
  width: 95%;
  line-height: 1.5;
  align-items: center;
  padding: 15px 15px 0px;
  /* transition: width 1s ease-in, height 1s ease-in; */
  p {
    display: flex;
    justify-content: space-between;

    span {
      font-weight: bold;
    }
  }
`;
const Sub_button = styled.div`
  button {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: white;
    background-color: #2c586e;
    cursor: pointer;
  }
  .total {
    background-color: rgba(0, 0, 0, 0.03);
    color: black;
    display: flex;
    justify-content: space-between;
  }
`;
export default Orders;
