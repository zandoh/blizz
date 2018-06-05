import React from "react";
import "./CharacterCompares.css";
import CharacterCompare from "../characterCompare/CharacterCompare";
import CompareData from "./compare.json";

class CharacterCompares extends React.Component {
  render() {
    var data = [];

    Object.keys(CompareData).forEach(function(key) {
      data.push(CompareData[key]);
    });
    return (
      <div className="characterComparesContainer characterColumn">
        <h2 className="comparesHeader">Compare</h2>
        <div className="comparesContainer">
          {data.map((character, i) => (
            <CharacterCompare key={"compare_" + i} character={character} />
          ))}
        </div>
      </div>
    );
  }
}

export default CharacterCompares;
