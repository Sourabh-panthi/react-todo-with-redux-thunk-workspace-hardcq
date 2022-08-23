export default (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case "SET_VISIBILITY":
      return action.visibilty;
    default:
      return state;
  }
};