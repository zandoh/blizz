import React from "react";
import { key } from "../../const";
import store from "../../store";
import "./CharacterCompare.css";

const uri = "https://us.api.battle.net/wow/data/character";

class CharacterCompare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      character: null
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

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
          onClick={this.showModal}
        />
        {this.state.show && (
          <Modal
            show={this.state.show}
            handleClose={this.hideModal}
            character={this.props.character}
          />
        )}
      </div>
    );
  }
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null,
      class: null
    };
  }

  componentDidMount() {
    this.getCharacter();
  }

  getCharacter() {
    const character = store.getState().characterReducer.character;
    this.classLookup(character.class);
    this.setState({ character: character });
  }

  numberWithCommas(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
  }

  classLookup(characterClass) {
    fetch(`${uri}/classes?locale=en_US&apikey=${key}`)
      .then(result => result.json())
      .then(data => {
        for (var index in data.classes) {
          if (data.classes[index].id === characterClass) {
            this.setState({
              class: data.classes[index].name
            });
          }
        }
      });
  }

  render() {
    const showHideClassName = this.props.show
      ? "modal display-block"
      : "modal display-none";

    return (
      <div className={showHideClassName + " characterCompareModalContainer"}>
        <div className="modal-main">
          {this.state.character &&
            this.state.class && (
              <table className="compareTable">
                <thead>
                  <tr>
                    <th className="yellow">
                      {
                        <img
                          src={
                            "https://render-us.worldofwarcraft.com/character/" +
                            this.state.character.thumbnail
                          }
                          alt={this.state.character.name + "'s Avatar"}
                        />
                      }{" "}
                      {this.state.character.name}
                    </th>
                    <th />
                    <th className="yellow">
                      {
                        <img
                          src={
                            "https://render-us.worldofwarcraft.com/character/" +
                            this.props.character.thumbnail
                          }
                          alt={this.props.character.name + "'s Avatar"}
                        />
                      }{" "}
                      {this.props.character.name}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.class}</td>
                    <td className="compareStat">Class</td>
                    <td>{this.props.character.class}</td>
                  </tr>
                  <tr>
                    <td>{this.state.character.level}</td>
                    <td className="compareStat">Level</td>
                    <td>{this.props.character.level}</td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(
                        this.state.character.items.averageItemLevel
                      )}
                    </td>
                    <td className="compareStat">Item Level</td>
                    <td>
                      {this.numberWithCommas(
                        this.props.character.averageItemLevel
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(
                        this.state.character.achievementPoints
                      )}
                    </td>
                    <td className="compareStat">Achievements</td>
                    <td>
                      {this.numberWithCommas(
                        this.props.character.achievementPoints
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(this.state.character.stats.str)}
                    </td>
                    <td className="compareStat">Strength</td>
                    <td>
                      {this.numberWithCommas(this.props.character.stats.str)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(this.state.character.stats.agi)}
                    </td>
                    <td className="compareStat">Agility</td>
                    <td>
                      {this.numberWithCommas(this.props.character.stats.agi)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(this.state.character.stats.int)}
                    </td>
                    <td className="compareStat">Intellect</td>
                    <td>
                      {this.numberWithCommas(this.props.character.stats.int)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(this.state.character.stats.sta)}
                    </td>
                    <td className="compareStat">Stamina</td>
                    <td>
                      {this.numberWithCommas(this.props.character.stats.sta)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.state.character.stats.crit * 100) / 100
                      )}
                    </td>
                    <td className="compareStat">Crit</td>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.props.character.stats.crit * 100) / 100
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.state.character.stats.haste * 100) / 100
                      )}
                    </td>
                    <td className="compareStat">Haste</td>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.props.character.stats.haste * 100) / 100
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.state.character.stats.mastery * 100) /
                          100
                      )}
                    </td>
                    <td className="compareStat">Mastery</td>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.props.character.stats.mastery * 100) /
                          100
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.state.character.stats.leech * 100) / 100
                      )}
                    </td>
                    <td className="compareStat">Leech</td>
                    <td>
                      {this.numberWithCommas(
                        Math.round(this.props.character.stats.leech * 100) / 100
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {this.numberWithCommas(
                        Math.round(
                          this.state.character.stats.versatility * 100
                        ) / 100
                      )}
                    </td>
                    <td className="compareStat">Versatility</td>
                    <td>
                      {this.numberWithCommas(
                        Math.round(
                          this.props.character.stats.versatility * 100
                        ) / 100
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          <button
            className="compareModalClose"
            onClick={this.props.handleClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default CharacterCompare;
