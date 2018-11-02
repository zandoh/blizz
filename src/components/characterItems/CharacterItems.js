import React from "react";
import "./CharacterItems.css";
import CharacterItem from "../characterItem/CharacterItem";

class CharacterItems extends React.Component {
  render() {
    return (
      <div className="characterItemsContainer characterColumn">
        <h2 className="itemsHeader">Items</h2>
        <div className="characterItemRow">
          {this.props.items.head && (
            <React.Fragment>
              <div className="characterSlot">Head: </div>
              <CharacterItem item={this.props.items.head} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.neck && (
            <React.Fragment>
              <div className="characterSlot">Neck: </div>
              <CharacterItem item={this.props.items.neck} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.shoulder && (
            <React.Fragment>
              <div className="characterSlot">Shoulder: </div>
              <CharacterItem item={this.props.items.shoulder} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.back && (
            <React.Fragment>
              <div className="characterSlot">Back: </div>
              <CharacterItem item={this.props.items.back} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.chest && (
            <React.Fragment>
              <div className="characterSlot">Chest: </div>
              <CharacterItem item={this.props.items.chest} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.wrist && (
            <React.Fragment>
              <div className="characterSlot">Wrist: </div>
              <CharacterItem item={this.props.items.wrist} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.hands && (
            <React.Fragment>
              <div className="characterSlot">Hands: </div>
              <CharacterItem item={this.props.items.hands} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.waist && (
            <React.Fragment>
              <div className="characterSlot">Waist: </div>
              <CharacterItem item={this.props.items.waist} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.legs && (
            <React.Fragment>
              <div className="characterSlot">Legs: </div>
              <CharacterItem item={this.props.items.legs} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.feet && (
            <React.Fragment>
              <div className="characterSlot">Feet: </div>
              <CharacterItem item={this.props.items.feet} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.finger1 && (
            <React.Fragment>
              <div className="characterSlot">Finger 1: </div>
              <CharacterItem item={this.props.items.finger1} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.finger2 && (
            <React.Fragment>
              <div className="characterSlot">Finger 2: </div>
              <CharacterItem item={this.props.items.finger2} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.trinket1 && (
            <React.Fragment>
              <div className="characterSlot">Trinket 1: </div>
              <CharacterItem item={this.props.items.trinket1} />
            </React.Fragment>
          )}
        </div>
        <div className="characterItemRow">
          {this.props.items.trinket2 && (
            <React.Fragment>
              <div className="characterSlot">Trinket 2: </div>
              <CharacterItem item={this.props.items.trinket2} />
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default CharacterItems;
