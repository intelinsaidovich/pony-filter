import React from "react";
import * as styled from "./style";

export const PageList = ({ size, clickHandler, currentPage }) => (
  <styled.Items>
    {Array(size)
      .fill()
      .map((_, i) => {
        const pageNumber = i + 1;
        const active = currentPage === pageNumber;
        const isVisible = size > 1;

        return isVisible ? (
          <styled.Item
            key={pageNumber}
            active={active}
            onClick={() => clickHandler(pageNumber)}
          >
            {pageNumber}
          </styled.Item>
        ) : null;
      })}
  </styled.Items>
);

export default PageList;
