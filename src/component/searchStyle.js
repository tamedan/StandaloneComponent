import React from "react";
import injectSheet from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const styles = {
  myButton: {
    padding: props => props.padding
  },
  myLabel: props => ({
    //display: "block",
    color: props.labelColor,
    fontWeight: props.fontWeight,
    height: props.height,
    fontStyle: props.fontStyle
  })
};

const Button = ({ classes, children }) => (
  <button className={classes.myButton}>
    <FontAwesomeIcon className={classes.myLabel} icon="stroopwafel" />
  </button>
);

Button.defaultProps = {
  //padding: 10,
  //fontWeight: "bold",
  fontStyle: "14px",
  labelColor: "red",
  height: "14px"
};

export const StyledButton = injectSheet(styles)(Button);
