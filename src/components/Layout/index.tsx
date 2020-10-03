import React from "react";

import { Container } from "./styles";

import Header from "../Header";
import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
