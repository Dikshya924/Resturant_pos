import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import styled from "styled-components";

import SearchBar from "material-ui-search-bar";
import Orders from "./Ordering/Orders";

function Navbar() {
  const [visibleRight, setVisibleRight] = useState(false);
  return (
    <NavBar>
      <Logo>
        <h2>
          Res<span>POS</span>
        </h2>
      </Logo>
      <Search>
        <SearchBar className="search" placeholder="search food, drinks etc" />
      </Search>
      <Date>
        <h4>Thursday, 2022</h4>
      </Date>
      <Side>
        <Sidebar
          visible={visibleRight}
          position="right"
          onHide={() => setVisibleRight(false)}
          style={{ width: 450 }}
        >
          <Orders />
        </Sidebar>
        <Button onClick={() => setVisibleRight(true)} className="mr-2">
          Orders
        </Button>
      </Side>
    </NavBar>
  );
}
const NavBar = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;
const Search = styled.div`
  color: black;
  display: flex;

  .search {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    box-shadow: none;
    width: 100%;
  }
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;
const Logo = styled.div`
  margin-right: 100px;

  span {
    color: #2c586e;
  }
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;

const Date = styled.div`
  @media (min-width: 0px) and (max-width: 768px) {
    display: none;
  }
`;

const Side = styled.div`
  display: none;
  text-align: center;
  overflow-y: hidden;

  .p-button {
    background: #2c586e;
    border: 1px solid #2c586e;

    &:hover {
      background: #8da1af;
      border: 1px solid #8da1af;
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    display: flex;
    align-content: right;
  }
`;
export default Navbar;
