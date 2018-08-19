import React, { Component } from "react";
import * as styled from "./style";

export class Card extends Component {
  render() {
    const { name, price, color, kind, is_new } = this.props.data;

    return (
      <styled.Card>
        <styled.Body>
          <styled.Header>
            <div className="doctor-card__desc">
              <styled.Name>{name}</styled.Name>
            </div>
          </styled.Header>
        </styled.Body>
        <styled.Footer>
          <div className="doctor-card__price">{price} ₽</div>
        </styled.Footer>
      </styled.Card>
    );
  }
}

export default Card;
