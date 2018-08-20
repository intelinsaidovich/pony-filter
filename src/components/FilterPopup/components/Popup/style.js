import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Inner = styled.div`
  position: absolute;
  min-width: 300px;
  max-width: 960px;
  width: 80%
  left: 0;
  right: 0;
  top: 50%;
  margin: auto;
  background: white;
  padding: 25px 40px;
  transform: translateY(-50%);
  border-radius: 5px;
  box-shadow: 0 1px 15px 2px rgba(0, 0, 0, 0.35);
`;
