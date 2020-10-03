import React from "react";

import { Container, Title, DateFilter } from "./styles";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <Title lineColor={lineColor}>
        <h1>{title}</h1>
      </Title>

      <DateFilter>{children}</DateFilter>
    </Container>
  );
};

export default ContentHeader;
