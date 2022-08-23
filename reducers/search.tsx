export default (state = '', action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return {...state, mode: action.mode, text: action.text};
    default:
      return state;
  }
};