import React from "react";
import autoBind from "react-autobind";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { StyledButton } from "./searchStyle.js";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      search: ""
    };
  }

  searchInputChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  onSubmitSearchForm() {
    this.props.onSetSearchResult(this.state.search);
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.onSubmitSearchForm();
          }}
        >
          <div className={"searchFormGroup"}>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                value={this.state.search}
                placeholder="Поиск..."
                onChange={this.searchInputChange}
              />
              <FormControl.Feedback />

              <StyledButton />
            </FormGroup>
          </div>
        </form>

        <br />
        <hr />
        <br />
        <form
          onSubmit={e => {
            e.preventDefault();
            this.onSubmitSearchForm(e);
          }}
        >
          <input placeholder="Поиск ..." />
        </form>
      </div>
    );
  }
}
