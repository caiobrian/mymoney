import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const FinanceFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
  .tag-filter-recurrent::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 55px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
  }

  .tag-filter-eventual::after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 55px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.sucess};
  }
`;
