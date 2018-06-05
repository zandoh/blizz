import React from "react";
import store from "../../store";
import CharacterStats from "../characterStats/CharacterStats";
import CharacterCompares from "../characterCompares/CharacterCompares";
import CharacterItems from "../characterItems/CharacterItems";
import CharacterClose from "../characterClose/CharacterClose";
import "./CharacterInfo.css";

class CharacterInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {
        general: {
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
        },
        stats: {
          ilvl: null,
          health: null,
          powerType: null,
          power: null,
          str: null,
          agi: null,
          int: null,
          sta: null,
          speedRating: null,
          speedRatingBonus: null,
          crit: null,
          critRating: null,
          haste: null,
          hasteRating: null,
          hasteRatingPercent: null,
          mastery: null,
          masteryRating: null,
          leech: null,
          leechRating: null,
          leechRatingBonus: null,
          versatility: null,
          versatilityDamageDoneBonus: null,
          versatilityHealingDoneBonus: null,
          versatilityDamageTakenBonus: null,
          avoidanceRating: null,
          avoidanceRatingBonus: null,
          spellPen: null,
          spellCrit: null,
          spellCritRating: null,
          mana5: null,
          mana5Combat: null,
          armor: null,
          dodge: null,
          dodgeRating: null,
          parry: null,
          parryRating: null,
          block: null,
          blockRating: null,
          mainHandDmgMin: null,
          mainHandDmgMax: null,
          mainHandSpeed: null,
          mainHandDps: null,
          offHandDmgMin: null,
          offHandDmgMax: null,
          offHandSpeed: null,
          offHandDps: null,
          rangedDmgMin: null,
          rangedDmgMax: null,
          rangedSpeed: null,
          rangedDps: null
        },
        items: {
          back: {},
          chest: {},
          feet: {},
          finger1: {},
          finger2: {},
          hands: {},
          head: {},
          legs: {},
          mainHand: {},
          neck: {},
          shoulder: {},
          trinket1: {},
          trinket2: {},
          waist: {},
          wrist: {}
        },
        professions: {
          primary: {
            name: null,
            icon: null,
            rank: null,
            max: null
          },
          secondary: {
            name: null,
            icon: null,
            rank: null,
            max: null
          }
        },
        talents: {},
        progression: {},
        pvp: {}
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
    this.setState(prevState => ({
      ...prevState,
      character: {
        general: {
          achievementPoints: store.getState().characterReducer.character
            .achievementPoints,
          battlegroup: store.getState().characterReducer.character.battlegroup,
          calcClass: store.getState().characterReducer.character.calcClass,
          class: store.getState().characterReducer.character.class,
          faction: store.getState().characterReducer.character.faction,
          gender: store.getState().characterReducer.character.gender,
          lastModified: store.getState().characterReducer.character
            .lastModified,
          level: store.getState().characterReducer.character.level,
          name: store.getState().characterReducer.character.name,
          race: store.getState().characterReducer.character.race,
          realm: store.getState().characterReducer.character.realm,
          thumbnail: store.getState().characterReducer.character.thumbnail,
          totalHonorableKills: store.getState().characterReducer.character
            .totalHonorableKills
        },
        stats: {
          ilvl: store.getState().characterReducer.character.items
            .averageItemLevel,
          health: store.getState().characterReducer.character.stats.health,
          powerType: store.getState().characterReducer.character.stats
            .powerType,
          power: store.getState().characterReducer.character.stats.power,
          str: store.getState().characterReducer.character.stats.str,
          agi: store.getState().characterReducer.character.stats.agi,
          int: store.getState().characterReducer.character.stats.int,
          sta: store.getState().characterReducer.character.stats.sta,
          speedRating: store.getState().characterReducer.character.stats
            .speedRating,
          speedRatingBonus: store.getState().characterReducer.character.stats
            .speedRatingBonus,
          crit: store.getState().characterReducer.character.stats.crit,
          critRating: store.getState().characterReducer.character.stats
            .critRating,
          haste: store.getState().characterReducer.character.stats.haste,
          hasteRating: store.getState().characterReducer.character.stats
            .hasteRating,
          hasteRatingPercent: store.getState().characterReducer.character.stats
            .hasteRatingPercent,
          mastery: store.getState().characterReducer.character.stats.mastery,
          masteryRating: store.getState().characterReducer.character.stats
            .masteryRating,
          leech: store.getState().characterReducer.character.stats.leech,
          leechRating: store.getState().characterReducer.character.stats
            .leechRating,
          leechRatingBonus: store.getState().characterReducer.character.stats
            .leechRatingBonus,
          versatility: store.getState().characterReducer.character.stats
            .versatility,
          versatilityDamageDoneBonus: store.getState().characterReducer
            .character.stats.versatilityDamageDoneBonus,
          versatilityHealingDoneBonus: store.getState().characterReducer
            .character.stats.versatilityHealingDoneBonus,
          versatilityDamageTakenBonus: store.getState().characterReducer
            .character.stats.versatilityDamageTakenBonus,
          avoidanceRating: store.getState().characterReducer.character.stats
            .avoidanceRating,
          avoidanceRatingBonus: store.getState().characterReducer.character
            .stats.avoidanceRatingBonus,
          spellPen: store.getState().characterReducer.character.stats.spellPen,
          spellCrit: store.getState().characterReducer.character.stats
            .spellCrit,
          spellCritRating: store.getState().characterReducer.character.stats
            .spellCritRating,
          mana5: store.getState().characterReducer.character.stats.mana5,
          mana5Combat: store.getState().characterReducer.character.stats
            .mana5Combat,
          armor: store.getState().characterReducer.character.stats.armor,
          dodge: store.getState().characterReducer.character.stats.dodge,
          dodgeRating: store.getState().characterReducer.character.stats
            .dodgeRating,
          parry: store.getState().characterReducer.character.stats.parry,
          parryRating: store.getState().characterReducer.character.stats
            .parryRating,
          block: store.getState().characterReducer.character.stats.block,
          blockRating: store.getState().characterReducer.character.stats
            .blockRating,
          mainHandDmgMin: store.getState().characterReducer.character.stats
            .mainHandDmgMin,
          mainHandDmgMax: store.getState().characterReducer.character.stats
            .mainHandDmgMax,
          mainHandSpeed: store.getState().characterReducer.character.stats
            .mainHandSpeed,
          mainHandDps: store.getState().characterReducer.character.stats
            .mainHandDps,
          offHandDmgMin: store.getState().characterReducer.character.stats
            .offHandDmgMin,
          offHandDmgMax: store.getState().characterReducer.character.stats
            .offHandDmgMax,
          offHandSpeed: store.getState().characterReducer.character.stats
            .offHandSpeed,
          offHandDps: store.getState().characterReducer.character.stats
            .offHandDps,
          rangedDmgMin: store.getState().characterReducer.character.stats
            .rangedDmgMin,
          rangedDmgMax: store.getState().characterReducer.character.stats
            .rangedDmgMax,
          rangedSpeed: store.getState().characterReducer.character.stats
            .rangedSpeed,
          rangedDps: store.getState().characterReducer.character.stats.rangedDps
        },
        items: {
          back: store.getState().characterReducer.character.items.back,
          chest: store.getState().characterReducer.character.items.chest,
          feet: store.getState().characterReducer.character.items.feet,
          finger1: store.getState().characterReducer.character.items.finger1,
          finger2: store.getState().characterReducer.character.items.finger2,
          hands: store.getState().characterReducer.character.items.hands,
          head: store.getState().characterReducer.character.items.head,
          legs: store.getState().characterReducer.character.items.legs,
          mainHand: store.getState().characterReducer.character.items.mainHand,
          neck: store.getState().characterReducer.character.items.neck,
          shoulder: store.getState().characterReducer.character.items.shoulder,
          trinket1: store.getState().characterReducer.character.items.trinket1,
          trinket2: store.getState().characterReducer.character.items.trinket2,
          waist: store.getState().characterReducer.character.items.waist,
          wrist: store.getState().characterReducer.character.items.wrist
        }
      }
    }));
  }

  render() {
    return (
      <div className="characterInfoContainer">
        <CharacterStats
          general={this.state.character.general}
          stats={this.state.character.stats}
        />
        <CharacterCompares />
        <CharacterItems items={this.state.character.items} />
        <CharacterClose />
      </div>
    );
  }
}

export default CharacterInfo;
