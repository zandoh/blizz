import React from "react";
import { key } from "../../const";
import "./CharacterStats.css";
import CharacterStat from "../characterStat/CharacterStat";

const uri = "https://us.api.battle.net/wow/data/character";

class CharacterStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      race: "",
      class: ""
    };
  }

  componentDidMount() {
    this.raceLookup();
    this.classLookup();
  }

  //Helper function to fetch the string of race as a number is returned in the initial call
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

  //Helper function to fetch the string of class as a number is returned in the initial call
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

  //Helper function to format a number adding a comma after every 3rd
  numberWithCommas(x) {
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 0;
  }

  render() {
    const damage = `${this.props.stats.mainHandDmgMin} - ${
      this.props.stats.mainHandDmgMax
    }`;

    return (
      <div className="characterStatsContainer characterColumn">
        <div className="statsRowWrapper">
          <div className="statsRow">
            <img
              src={
                "https://render-us.worldofwarcraft.com/character/" +
                this.props.general.thumbnail
              }
              alt={this.props.general.name + "'s Avatar"}
            />
            <div className="characterGeneralWrapper">
              <div className="characterName">{this.props.general.name}</div>
              <div className="characterLevel">
                {this.props.general.level +
                  " " +
                  this.state.race +
                  " " +
                  this.state.class}
              </div>
              <div className="characteriLvl">
                iLvl: <span className="yellow">{this.props.stats.ilvl}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="statsWrapper">
          <div className="statsColumn">
            <h2>Attributes</h2>
            <CharacterStat
              name="Strength"
              attribute={this.numberWithCommas(this.props.stats.str)}
            />
            <CharacterStat
              name="Agility"
              attribute={this.numberWithCommas(this.props.stats.agi)}
            />
            <CharacterStat
              name="Intellect"
              attribute={this.numberWithCommas(this.props.stats.int)}
            />
            <CharacterStat
              name="Stamina"
              attribute={this.numberWithCommas(this.props.stats.sta)}
            />
            <h2>Attack</h2>
            <CharacterStat
              name="Damage"
              attribute={this.numberWithCommas(damage)}
            />
            <CharacterStat
              name="Speed"
              attribute={this.numberWithCommas(this.props.stats.speedRating)}
            />
            <h2>Spell</h2>
            <CharacterStat
              name="Mana Regen"
              attribute={this.numberWithCommas(this.props.stats.mana5)}
            />
            <h2>Defense</h2>
            <CharacterStat
              name="Armor"
              attribute={this.numberWithCommas(this.props.stats.armor)}
            />
            <CharacterStat
              name="Dodge"
              attribute={this.numberWithCommas(this.props.stats.dodge)}
            />
            <CharacterStat
              name="Parry"
              attribute={this.numberWithCommas(this.props.stats.parry)}
            />
            <CharacterStat
              name="Block"
              attribute={this.numberWithCommas(this.props.stats.block)}
            />
            <h2>Enhancements</h2>
            <CharacterStat
              name="Crit"
              attribute={this.numberWithCommas(
                Math.round(this.props.stats.crit * 100) / 100
              )}
            />
            <CharacterStat
              name="Haste"
              attribute={this.numberWithCommas(
                Math.round(this.props.stats.haste * 100) / 100
              )}
            />
            <CharacterStat
              name="Mastery"
              attribute={this.numberWithCommas(
                Math.round(this.props.stats.mastery * 100) / 100
              )}
            />
            <CharacterStat
              name="Leech"
              attribute={this.numberWithCommas(
                Math.round(this.props.stats.leech * 100) / 100
              )}
            />
            <CharacterStat
              name="Versatility"
              attribute={this.numberWithCommas(
                Math.round(this.props.stats.versatility * 100) / 100
              )}
            />
          </div>
          <div className="statsColumn" />
        </div>
      </div>
    );
  }
}

export default CharacterStats;
