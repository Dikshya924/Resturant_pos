import React from "react";
import styled from "styled-components";
import SearchBar from "material-ui-search-bar";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import KitchenOutlinedIcon from "@material-ui/icons/KitchenOutlined";
import SidebarDemo from "./Ordering/SidebarDemo";
function Navbar() {
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
      {/* <Date>
        <h4>Thursday, 2022</h4> */}
      <Side>
        <SidebarDemo />
      </Side>
      {/* </Date> */}
    </NavBar>
  );
}
const NavBar = styled.div`
  width: 95%;
  padding: 10px;
  display: flex;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;
const Search = styled.div`
  color: black;
  display: flex;
  width: 80%;
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
  width: 30%;
  display: flex;
  justify-content: flex-end;
`;

const Side = styled.div`
  display: none;
  overflow-y: hidden;

  @media (min-width: 0px) and (max-width: 768px) {
    width: 30%;
    display: flex;
    justify-content: flex-end;
  }
`;
export default Navbar;
