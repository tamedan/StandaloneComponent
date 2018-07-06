import React from "react";
import injectSheet from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const styles = {
  myButton: {
    padding: props => props.padding
  },
  myLabel: props => ({
    color: props.labelColor,
    fontWeight: props.fontWeight,
    height: props.height,
    fontStyle: props.fontStyle
  })
};
const Button = ({ classes }) => (
  <button className={classes.myButton}>
    <FontAwesomeIcon className={classes.myLabel} icon={faSearch} />
  </button>
);

Button.defaultProps = {
  fontStyle: "14px",
  labelColor: "red",
  height: "14px"
};

export const StyledButton = injectSheet(styles)(Button);
