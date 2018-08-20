import React from "react";
import * as styled from "./style";

const Popup = ({ isVisible, close, children }) => {
  return isVisible ? (
    <styled.Popup>
      <styled.Inner>
        <h1>Фильтр пони</h1>
        {children}
        <button onClick={close}>закрыть</button>
      </styled.Inner>
    </styled.Popup>
  ) : null;
};

export default Popup;
