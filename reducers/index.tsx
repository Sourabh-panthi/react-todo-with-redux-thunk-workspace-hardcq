import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";
import progress from "./progress";
import search from './search';
import dropDown from './dropDown';

let reducer = combineReducers({ todos, filter: filter,progress, search: search, dropDown: dropDown });

export default reducer;
