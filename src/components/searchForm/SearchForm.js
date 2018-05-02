import React from "react";
import { connect } from "react-redux";
import { addCharacter, removeCharacter } from "../../actions/Actions";
import { bindActionCreators } from "redux";
import { uri, key } from "../../const";
import "./SearchForm.css";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: "",
      name: "",
      realms: "",
      userRealm: ""
    };
  }

  componentDidMount() {
    this.getRealms();
  }

  render() {
    if (!this.state.realms.length) {
      return null;
    }

    let options = this.state.realms.map(realm => (
      <option value={realm.name} key={realm.name}>
        {realm.name}
      </option>
    ));

    return (
      <div className="searchFormContainer">
        <form onSubmit={this.handleSubmit}>
          <input
            className="formInput"
            type="text"
            value={this.state.value}
            onChange={this.nameOnChange}
            placeholder="Name"
          />
          <select
            className="formInput"
            defaultValue=""
            onChange={this.realmOnChange}
          >
            <option value="" key="default">
              Realm
            </option>
            {options}
          </select>
          <button
            type="submit"
            value="Submit"
            disabled={!this.state.name || !this.state.userRealm}
          >
            Search
          </button>
        </form>
      </div>
    );
  }

  getRealms() {
    fetch(uri + "/realm/status?locale=en_US&apikey=" + key)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            realms: result.realms
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  nameOnChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  realmOnChange = event => {
    this.setState({
      userRealm: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("character submitted: ", this.state);
    event.preventDefault();
    this.removeCharacter();
    this.getCharacterInfo();
  };

  getCharacterInfo() {
    fetch(
      `${uri}/character/${this.state.userRealm}/${
        this.state.name
      }?locale=en_US&apikey=${key}`
    )
      .then(result => result.json())
      .then(data => {
        this.setCharacter(data);
      });
  }

  setCharacter = character => {
    this.props.dispatch(addCharacter(character));
  };

  removeCharacter() {
    this.props.dispatch(removeCharacter());
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(addCharacter, removeCharacter, dispatch)
  };
}

export default connect(mapDispatchToProps)(SearchForm);
