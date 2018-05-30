import React from "react";
import "./CharacterStat.css";

class CharacterStat extends React.Component {
  render() {
    return (
      <div className="character-attribute">
        <div className="name">{this.props.name}</div>
        <div className="attribute">{this.props.attribute}</div>
      </div>
    );
  }
}

export default CharacterStat;
