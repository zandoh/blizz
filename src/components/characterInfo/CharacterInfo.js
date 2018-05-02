import React from "react";
import store from "../../store";

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      baseImgUrl: "https://render-us.worldofwarcraft.com/character/",
      character: {
        achievementPoints: null,
        battlegroup: null,
        calcClass: null,
        class: null,
        faction: null,
        gender: null,
        lastModified: null,
        level: null,
        name: null,
        race: null,
        realm: null,
        thumbnail: null,
        totalHonorableKills: null
      }
    };
  }

  componentDidMount() {
    this.setCharacterState();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.character !== nextState.character;
  }

  setCharacterState() {
    console.log(
      "setCharacterState... store state.. ach points...",
      store.getState().characterReducer.character.achievementPoints
    );
    this.setState(prevState => ({
      ...prevState,
      character: {
        achievementPoints: store.getState().characterReducer.character
          .achievementPoints,
        battlegroup: store.getState().characterReducer.character.battlegroup,
        calcClass: store.getState().characterReducer.character.calcClass,
        class: store.getState().characterReducer.character.class,
        faction: store.getState().characterReducer.character.faction,
        gender: store.getState().characterReducer.character.gender,
        lastModified: store.getState().characterReducer.character.lastModified,
        level: store.getState().characterReducer.character.level,
        name: store.getState().characterReducer.character.name,
        race: store.getState().characterReducer.character.race,
        realm: store.getState().characterReducer.character.realm,
        thumbnail: store.getState().characterReducer.character.thumbnail,
        totalHonorableKills: store.getState().characterReducer.character
          .totalHonorableKills
      }
    }));
  }

  render() {
    return (
      <div className="characterInfoContainer">
        <img
          src={this.state.baseImgUrl + this.state.character.thumbnail}
          alt={this.state.character.name + "'s Avatar"}
        />
      </div>
    );
  }
}

export default CharacterInfo;
