import React from "react";
import { FormGroup, FormControl, Button } from "react-bootstrap";

export class Search extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.onSubmitSearchForm();
        }}
      >
        <FormGroup controlId="formBasicText">
          <FormControl
            type="text"
            value={this.state.search}
            placeholder="Поиск..."
            onChange={this.searchInputChange}
          />
          <FormControl.Feedback />
          <Button type="submit">
            <i className={"fa fa-search"} />
          </Button>
        </FormGroup>
      </form>
    );
  }
}
