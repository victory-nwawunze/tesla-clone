/** @format */
/** @format */

import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu></Menu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  padding: 0 20px;
  align-item: center;
`;

const Menu = styled.div``;
