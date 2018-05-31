import React from "react";
import "./CharacterItem.css";

class CharacterItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  /*
    -1 - generic defaults index used for error conditions
    0 - Poor      --> #9D9D9D;
    1 - Common    --> #FFF;
    2 - Uncommon  --> #1EFF00;
    3 - Rare      --> #0070FF;
    4 - Epic      --> #A335EE;
    5 - Legendary --> #FF8000;
    6 - Artifact  --> #E6CC80;
    7 - Heirloom  --> #00CCFF;
  */
  lookupItemQuality(quality) {
    let className = "";

    switch (quality) {
      case 0:
        className = "quality-poor";
        break;
      case 1:
        className = "quality-common";
        break;
      case 2:
        className = "quality-uncommon";
        break;
      case 3:
        className = "quality-rare";
        break;
      case 4:
        className = "quality-epic";
        break;
      case 5:
        className = "quality-legendary";
        break;
      case 6:
        className = "quality-artifact";
        break;
      case 7:
        className = "quality-heirloom";
        break;
      default:
        className = "";
    }

    return className;
  }
  render() {
    return (
      <div
        className={
          "characterItem " + this.lookupItemQuality(this.props.item.quality)
        }
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        <img
          src={
            "https://render-us.worldofwarcraft.com/icons/56/" +
            this.props.item.icon +
            ".jpg"
          }
          alt={""}
        />
        {this.state.isHovering && (
          <div className="characterItemPopover">
            <div className="popoverItem item-name">{this.props.item.name}</div>
            <div className="popoverItem item-stat">
              <div>Item Level:</div>
              <div>{this.props.item.itemLevel}</div>
            </div>
            <div className="popoverItem item-stat">
              <div>Armor:</div>
              <div>{this.props.item.armor}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CharacterItem;
