import React, { Component } from "react";
import * as styled from "./style";
const Popup = ({ isVisible, handleClose, children }) => {
  return isVisible ? (
    <styled.Popup>
      <styled.Inner>
        <h1>Фильтр пони</h1>
        {children}
        <button onClick={handleClose}>close me</button>
      </styled.Inner>
    </styled.Popup>
  ) : null;
};

export default Popup;
