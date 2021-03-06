import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

import { Container } from "./styles";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Mario", label: "Mario" },
    { value: "Ana", label: "Ana" },
    { value: "João", label: "João" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
