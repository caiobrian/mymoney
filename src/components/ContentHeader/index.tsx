import React from "react";
import SelectInput from "../SelectInput";

import { Container, Title, DateFilter } from "./styles";

const ContentHeader: React.FC = () => {
  const options = [
    {
      value: "alou",
      label: "alou",
    },
    {
      value: "alou",
      label: "alou",
    },
    {
      value: "alou",
      label: "alou",
    },
  ];

  return (
    <Container>
      <Title>
        <h1>Título</h1>
      </Title>

      <DateFilter>
        <SelectInput options={options} />
      </DateFilter>
    </Container>
  );
};

export default ContentHeader;
