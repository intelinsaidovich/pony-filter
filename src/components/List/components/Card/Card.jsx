import React, { Component } from "react";
import * as styled from "./style";

export class Card extends Component {
  colors = {
    красный: "#F44336",
    оранжевый: "#FF9800",
    жёлтый: "#FFC107",
    зелёный: "#8BC34A",
    голубой: "#03A9F4",
    синий: "#2196F3",
    фиолетовый: "#673AB7"
  };

  render() {
    const { id, name, price, color, kind, is_new } = this.props.data;
    const hex = this.colors[color];

    return (
      <styled.Card>
        <styled.Body>
          <styled.Header>
            {kind} - <styled.Name>{name}</styled.Name> (#{id})
          </styled.Header>
        </styled.Body>
        <styled.Footer style={{ background: hex }}>
          <div>{price} ₽</div>
          {is_new && <div>Новинка!</div>}
        </styled.Footer>
      </styled.Card>
    );
  }
}

export default Card;
