import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #eee;
  border-radius: 6px;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 13px;
`;

export const Body = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 32px 32px 22px;
`;

export const Name = styled.div`
  font-weight: 700;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 32px;
  margin-top: auto;
  background-color: #f3f1f0;
`;
export const Price = styled.div`
  margin-left: 15px;
  font-weight: 700;
`;
