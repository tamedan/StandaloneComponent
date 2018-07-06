import React from "react";
import ReactDOM from "react-dom";
import autoBind from "react-autobind";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import { Search } from "/src/component/Search.jsx";

import "./styles.css";
library.add(faStroopwafel);

export class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      searchResult: ""
    };
  }
  onSetSearchResult(value) {
    this.setState({
      searchResult: value
    });
  }
  render() {
    console.log("index searchResult: ", this.state.searchResult);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Search onSetSearchResult={this.onSetSearchResult} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
