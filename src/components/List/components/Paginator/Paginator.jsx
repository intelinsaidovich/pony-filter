import React, { Component, Fragment } from "react";
import PageList from "./components/PageList/PageList";

export class Paginator extends Component {
  state = {
    currentPage: 1
  };

  _showPage = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { Component, data } = this.props;
    const { currentPage } = this.state;

    const itemsOnPage = 5;
    const pagesCount = Math.ceil(data.length / itemsOnPage);

    const slicedItems = [];
    for (let i = 0; i < pagesCount; i++) {
      const start = i * itemsOnPage;
      const end = itemsOnPage + itemsOnPage * i;

      slicedItems.push({ pageNumber: i + 1, items: data.slice(start, end) });
    }

    const { items: currentPageItems } = slicedItems.find(
      ({ pageNumber }) => pageNumber === currentPage
    );

    return (
      <Fragment>
        <div className="row">
          {currentPageItems.map(item => (
            <div className="col-12 col-md-5 col-lg-4">
              <Component data={item} price-type={"priceType"} />
            </div>
          ))}
        </div>
        <PageList currentPage={currentPage} clickHandler={this._showPage} />
      </Fragment>
    );
  }
}

export default Paginator;
