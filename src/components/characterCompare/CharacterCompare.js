import React from "react";
import "./CharacterCompare.css";

class CharacterCompare extends React.Component {
  render() {
    //const armoryLink = `https://worldofwarcraft.com/en-us/character/`;
    return (
      <div className="characterCompareContainer">
        <img
          src={
            "https://render-us.worldofwarcraft.com/character/" +
            this.props.character.thumbnail
          }
          alt={this.props.character.name + "'s Avatar"}
          className={"compareImage " + this.props.character.faction}
        />
      </div>
    );
  }
}

export default CharacterCompare;
