import React, { useMemo, useState, useEffect } from "react";
import ContentHeader from "../../components/ContentHeader";
import FinanceCard from "../../components/FinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../services/mockBalance/gains";
import expenses from "../../services/mockBalance/expenses";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import { Container, Content, FinanceFilter } from "./styles";

interface IRouteParamsProps {
  match: {
    params: {
      type: string;
    };
  };
}

interface IBalanceProps {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRouteParamsProps> = ({ match }) => {
  const [balance, setBalance] = useState<IBalanceProps[]>([]);
  const { type } = match.params;

  const switchTypes = useMemo(() => {
    return type === "entry-balance"
      ? {
          title: "Entradas",
          lineColor: "#F7931B",
          file: gains,
        }
      : {
          title: "Saídas",
          lineColor: "#E44C4E",
          file: expenses,
        };
  }, [type]);

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

  useEffect(() => {
    const response = switchTypes.file.map(
      ({ description, amount, frequency, date }) => {
        return {
          id: String(Math.random() * balance.length),
          description: description,
          amountFormatted: formatCurrency(Number(amount)),
          frequency: frequency,
          dateFormatted: formatDate(date),
          tagColor: frequency === "recorrente" ? "#e44c4e" : "#4e41f0",
        };
      }
    );

    setBalance(response);
  }, []);

  const financeData = balance.map(
    ({ id, tagColor, description, dateFormatted, amountFormatted }) => (
      <FinanceCard
        key={id}
        tagColor={tagColor}
        title={description}
        subtitle={dateFormatted}
        amount={amountFormatted}
      />
    )
  );

  return (
    <Container>
      <ContentHeader
        title={switchTypes.title}
        lineColor={switchTypes.lineColor}
      >
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

      <Content>{financeData}</Content>
    </Container>
  );
};

export default List;
