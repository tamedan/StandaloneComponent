import React from "react";
import injectSheet from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { defaultStyle } from "./defaultStyle.js";

const styles = {
  myButton: {
    height: props => props.buttonHeight,
    border: props => props.border,
    borderRadius: props => props.borderRadius,
    borderLeft: "0 !important",
    outline: "0 !important",
    cursor: "pointer",
    color: props => props.labelColor,
    transition: "0.3s",
    "&:hover": {
      background: defaultStyle.primaryColor,
      color: "#FFFFFF"
    }
  },
  myLabel: props => ({
    fontWeight: props.fontWeight,
    height: props.height,
    fontStyle: props.fontStyle,
    "&:hover": {
      path: {
        color: "#FFFFFF !important"
      }
    }
  })
};
const Button = ({ classes }) => (
  <button className={classes.myButton}>
    <FontAwesomeIcon className={classes.myLabel} icon={faSearch} />
  </button>
);

Button.defaultProps = {
  border: `1px solid ${defaultStyle.primaryColor}`,
  borderRadius: "0 4px 4px 0",
  fontWtyle: "14px",
  labelColor: defaultStyle.primaryColor,
  buttonHeight: "21px",
  height: "14px"
};

export const StyledButton = injectSheet(styles)(Button);
