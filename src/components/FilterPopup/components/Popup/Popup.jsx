import React, { Component } from "react";
import * as styled from "./style";

class Popup extends Component {
  myRef = React.createRef();

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      e.preventDefault();
      this.props.close();
    }
  };

  handleOutsideClick = e => {
    !this.myRef.current.contains(e.target) && this.props.close();
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  render() {
    const { filter, children } = this.props;

    return (
      <styled.Popup>
        <styled.Inner innerRef={this.myRef}>
          <h1>Фильтр пони</h1>
          {children}
          <button onClick={filter}>Найти пони</button>
        </styled.Inner>
      </styled.Popup>
    );
  }
}

export default Popup;
