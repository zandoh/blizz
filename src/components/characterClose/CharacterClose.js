import React from "react";
import { connect } from "react-redux";
import { removeCharacter } from "../../actions/Actions";
import { bindActionCreators } from "redux";
import * as close from "../../assets/img/close.png";
import "./CharacterClose.css";

class CharacterClose extends React.Component {
  onCloseClick() {
    this.props.dispatch(removeCharacter());
  }

  render() {
    return (
      <div
        className="characterCloseContainer"
        onClick={this.onCloseClick.bind(this)}
      >
        <img src={close} alt="Close" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(removeCharacter, dispatch)
  };
}

export default connect(mapDispatchToProps)(CharacterClose);
