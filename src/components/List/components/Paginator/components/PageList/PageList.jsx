import React from "react";
import * as styled from "./style";

export const PageList = ({ size, clickHandler, currentPage }) => (
  <styled.Items>
    {Array(size)
      .fill()
      .map((_, i) => {
        const pageNumber = i + 1;
        const active = currentPage === pageNumber;

        return (
          <styled.Item
            active={active}
            onClick={() => clickHandler(pageNumber)}>
            {pageNumber}
          </styled.Item>
        );
      })}
  </styled.Items>
);

export default PageList;
