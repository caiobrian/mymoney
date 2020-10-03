import styled from "styled-components";

interface ITagprops {
  color: string;
}

export const Container = styled.li`
  background-color: ${({ theme }) => theme.colors.tertiary};
  list-style: none;
  border-radius: 5px;
  margin: 10px 0;
  padding: 12px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
  }
`;

export const Tag = styled.div<ITagprops>`
  width: 10px;
  height: 60%;
  background-color: ${({ color }) => color};
  position: absolute;
  left: 0;
`;
