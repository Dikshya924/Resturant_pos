import React from "react";
import styled from "styled-components";
import SearchBar from "material-ui-search-bar";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import KitchenOutlinedIcon from "@material-ui/icons/KitchenOutlined";
function Navbar() {
  const date=new Date();

  return (
    <NavBar>
      <Logo>
        <h2>
          Res<span>POS</span>
        </h2>
      </Logo>
      <NavList>
        <SearchBar className="search" placeholder="search food, drinks etc" />
      </NavList>
    </NavBar>
  );
}
const NavBar = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;
const NavList = styled.ul`
  list-style: none;
  color: black;
  display: flex;
  .search {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    box-shadow: none;
  }
`;
const Logo = styled.div`
  span {
    color: #2c586e;
  }
`;
const NavItem = styled.li`
  margin-left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    color: #2c586e;
  }
`;
export default Navbar;
