import React, { useMemo, useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

import ContentHeader from "../../components/ContentHeader";
import FinanceCard from "../../components/FinanceCard";
import SelectInput from "../../components/SelectInput";

import gains from "../../services/mockBalance/gains";
import expenses from "../../services/mockBalance/expenses";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import monthsList from "../../utils/months";

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
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedFrequency, setSelectedFrequency] = useState([
    "recorrente",
    "eventual",
  ]);

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

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    switchTypes.file.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [switchTypes.file]);

  const filteredData = useCallback(() => {
    const data = switchTypes.file.filter((item) => {
      const newDate = new Date(item.date);
      const month = newDate.getMonth() + 1;
      const year = newDate.getFullYear();

      return (
        month === selectedMonth &&
        year === selectedYear &&
        selectedFrequency.includes(item.frequency)
      );
    });
    const filteredData = data.map(
      ({ description, amount, frequency, date }) => {
        return {
          id: uuidv4(),
          description: description,
          amountFormatted: formatCurrency(Number(amount)),
          frequency: frequency,
          dateFormatted: formatDate(date),
          tagColor: frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
        };
      }
    );
    setBalance(filteredData);
  }, [selectedFrequency, selectedMonth, selectedYear, switchTypes.file]);

  useEffect(() => {
    filteredData();
  }, [filteredData]);

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

  const handleFrequency = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      (item) => item === frequency
    );

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter((item) => item !== frequency);
      return setSelectedFrequency(filtered);
    }

    setSelectedFrequency((prev) => [...prev, frequency]);
  };

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month);
      setSelectedMonth(parseMonth);
    } catch (error) {
      throw new Error("invalid month value");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setSelectedYear(parseYear);
    } catch (error) {
      throw new Error("invalid year value");
    }
  };

  return (
    <Container>
      <ContentHeader
        title={switchTypes.title}
        lineColor={switchTypes.lineColor}
      >
        <SelectInput
          options={months}
          onChange={(e) => handleMonthSelected(e.target.value)}
          defaultValue={selectedMonth}
        />
        <SelectInput
          options={years}
          onChange={(e) => handleYearSelected(e.target.value)}
          defaultValue={selectedYear}
        />
      </ContentHeader>

      <FinanceFilter>
        <button
          type="button"
          className={`tag-filter tag-filter-recurrent
          ${selectedFrequency.includes("recorrente") && "tag-actived"}`}
          onClick={() => handleFrequency("recorrente")}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter tag-filter-eventual
          ${selectedFrequency.includes("eventual") && "tag-actived"}`}
          onClick={() => handleFrequency("eventual")}
        >
          Eventuais
        </button>
      </FinanceFilter>

      <Content>{financeData}</Content>
    </Container>
  );
};

export default List;
