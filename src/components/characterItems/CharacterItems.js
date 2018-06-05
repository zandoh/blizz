import React from "react";
import "./CharacterItems.css";
import CharacterItem from "../characterItem/CharacterItem";

class CharacterItems extends React.Component {
  render() {
    return (
      <div className="characterItemsContainer characterColumn">
        <h2 className="itemsHeader">Items</h2>
        <div className="characterItemRow">
          <div className="characterSlot">Head: </div>
          <CharacterItem item={this.props.items.head} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Neck: </div>
          <CharacterItem item={this.props.items.neck} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Shoulder: </div>
          <CharacterItem item={this.props.items.shoulder} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Back: </div>
          <CharacterItem item={this.props.items.back} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Chest: </div>
          <CharacterItem item={this.props.items.chest} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Wrist: </div>
          <CharacterItem item={this.props.items.wrist} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Hands: </div>
          <CharacterItem item={this.props.items.hands} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Waist: </div>
          <CharacterItem item={this.props.items.waist} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Legs: </div>
          <CharacterItem item={this.props.items.legs} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Feet: </div>
          <CharacterItem item={this.props.items.feet} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Finger 1: </div>
          <CharacterItem item={this.props.items.finger1} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Finger 2: </div>
          <CharacterItem item={this.props.items.finger2} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Trinket 1: </div>
          <CharacterItem item={this.props.items.trinket1} />
        </div>
        <div className="characterItemRow">
          <div className="characterSlot">Trinket 2: </div>
          <CharacterItem item={this.props.items.trinket2} />
        </div>
      </div>
    );
  }
}

export default CharacterItems;
