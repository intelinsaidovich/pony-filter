import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  margin-bottom: 20px;
  box-shadow: 0 1px 15px -2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Body = styled.div`
  padding: 24px 32px 22px;
`;

export const Name = styled.div`
  span {
    font-weight: 700;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 32px;
  margin-top: auto;
  background-color: #daf4ff;
`;
export const Price = styled.div`
  font-weight: 700;
`;

export const Color = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 8px;
`;

export const Index = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
`;
