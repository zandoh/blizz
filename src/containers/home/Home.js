import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "../../components/searchForm/SearchForm";
import CharacterInfo from "../../components/characterInfo/CharacterInfo";
import store from "../../store";
import "./Home.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterLoaded: false
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        characterLoaded: store.getState().characterReducer.characterLoaded
      });
    });
  }

  render() {
    return (
      <div className="App">
        <SearchForm />
        {this.state.characterLoaded && (
          <div className="App-characterInfoContainer">
            <h1>Character Info....</h1>
            <CharacterInfo />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    character: state.characterReducer
  };
}
export default connect(mapStateToProps)(App);
