import React from "react";
import { key } from "../../const";
import "./CharacterStats.css";

const uri = "https://us.api.battle.net/wow/data/character";

class CharacterStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      race: null,
      class: null
    };
  }

  componentDidMount() {
    this.raceLookup();
    this.classLookup();
  }

  raceLookup() {
    fetch(`${uri}/races?locale=en_US&apikey=${key}`)
      .then(result => result.json())
      .then(data => {
        for (var index in data.races) {
          if (data.races[index].id === this.props.general.race) {
            this.setState({
              race: data.races[index].name
            });
          }
        }
      });
  }

  classLookup() {
    fetch(`${uri}/classes?locale=en_US&apikey=${key}`)
      .then(result => result.json())
      .then(data => {
        for (var index in data.classes) {
          if (data.classes[index].id === this.props.general.class) {
            this.setState({
              class: data.classes[index].name
            });
          }
        }
      });
  }

  mapPropToResult() {}

  render() {
    return (
      <div className="characterStatsContainer characterColumn">
        <div className="statsRow">
          <img
            src={
              "https://render-us.worldofwarcraft.com/character/" +
              this.props.general.thumbnail
            }
            alt={this.props.general.name + "'s Avatar"}
          />
          <h2>{this.props.general.name}</h2>
          <br />
          <h3>
            {this.props.general.level +
              " " +
              this.state.race +
              " " +
              this.state.class}
          </h3>
        </div>
        <div className="statsWrapper">
          <div className="statsColumn">
            <span className="attribute-name">
              Strength <p className="yellow">{this.props.stats.str}</p>
            </span>
          </div>
          <div className="statsColumn" />
        </div>
      </div>
    );
  }
}

export default CharacterStats;
