import styled, { css } from "styled-components";

export const Items = styled.div`
  display: flex;
  margin: 20px -10px;
`;

export const Item = styled.div`
  font-weight: 700;  
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: orange;
  }

  ${props =>
    props.active &&
    css`
    color: orange;
  `};
`;
