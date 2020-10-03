import styled from "styled-components";

export const Container = styled.div`
  grid-area: HEADER;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 15px;
`;

export const Welcome = styled.h3``;

export const Username = styled.span``;
