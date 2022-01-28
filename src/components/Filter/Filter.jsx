import React, { Component } from "react";
import PropTypes from "prop-types";
import FilterStyled from "./Filter.styled";

class Filter extends Component {
  render() {
    return (
      <FilterStyled>
        <label>Find contacts by name</label>
        <input type="text" onChange={this.props.onChange} />
      </FilterStyled>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
