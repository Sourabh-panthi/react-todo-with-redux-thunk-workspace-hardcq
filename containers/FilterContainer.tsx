import React from "react";
import FilterPanel from "../components/FilterPanel";
import { connect } from "react-redux";
import {setVisibility} from './actions'

let FilterContainer = (props) => (
  <div>
    <FilterPanel
      onClick={value =>
        props.dispatch({ type: "SET_VISIBILITY", visibilty: value })
      }
    />
  </div>
);

export default connect()(FilterContainer);
