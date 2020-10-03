import React from "react";
import ContentHeader from "../../components/ContentHeader";
import FinanceCard from "../../components/FinanceCard";
import SelectInput from "../../components/SelectInput";

import { Container, Content, FinanceFilter } from "./styles";

const List: React.FC = () => {
  const months = [
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const years = [
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <FinanceFilter>
        <button type="button" className="tag-filter tag-filter-recurrent">
          Recorrentes
        </button>
        <button type="button" className="tag-filter tag-filter-eventual">
          Eventuais
        </button>
      </FinanceFilter>

      <Content>
        <FinanceCard
          tagColor="#E44C4E"
          title="Conta de Luz"
          subtitle="03/10/2020"
          amount="R$ 198,75"
        />
      </Content>
    </Container>
  );
};

export default List;
