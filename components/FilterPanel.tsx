import React, { Component } from "react";
import FilterButton from "./FilterButton";

export default class FilterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: "SHOW_ALL"
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  private onClickHandler(value) {
    this.props.onClick(value);
    this.setState({ currentFilter: value });
  }

  render() {
    return (
      <div >
        <FilterButton
          filter={this.state.currentFilter}
          name="SHOW_ALL"
          value="Show All"
          onClick={this.onClickHandler}
        />

        <FilterButton
          filter={this.state.currentFilter}
          name="SHOW_COMPLETED"
          value="Show Completed"
          onClick={this.onClickHandler}
        />
        
        <FilterButton
          value="Show Pending"
          name="SHOW_PENDING"
          filter={this.state.currentFilter}
          onClick={this.onClickHandler}
        />
      </div>
    );
  }
}
