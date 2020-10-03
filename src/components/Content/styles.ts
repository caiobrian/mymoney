import styled from "styled-components";

export const Container = styled.div`
  grid-area: CONTENT;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 25px;
`;
