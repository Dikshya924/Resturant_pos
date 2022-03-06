import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import Orders from "./Orders";
import styled from "styled-components";
const SidebarDemo = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);

  //   const customIcons = (
  //     <React.Fragment>
  //       <button className="p-sidebar-icon p-link mr-1">
  //         <span className="pi pi-print" />
  //       </button>
  //       <button className="p-sidebar-icon p-link mr-1">
  //         <span className="pi pi-arrow-right" />
  //       </button>
  //     </React.Fragment>
  //   );

  return (
    <Card>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
      >
        <Orders />
      </Sidebar>
      <Button onClick={() => setVisibleRight(true)} className="mr-2">
        Orders
      </Button>
    </Card>
  );
};
const Card = styled.div`
  .p-button {
    background: #2c586e;
    border: 1px solid #2c586e;
    &:hover {
      background: #8da1af;
      border: 1px solid #8da1af;
    }
  }
`;
export default SidebarDemo;
