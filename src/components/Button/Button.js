import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <button className="Button">{this.props.children}</button>;
  }
}

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
