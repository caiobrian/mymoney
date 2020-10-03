import styled from "styled-components";

export const Container = styled.div`
  grid-area: CONTENT;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 25px;

  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: 10px;
  }
`;
