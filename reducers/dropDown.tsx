export default (state = '', action) => {
  switch (action.type) {
    case "SET_DROPDOWN_TEXT":
      return  action.text;
    default:
      return state;
  }
};