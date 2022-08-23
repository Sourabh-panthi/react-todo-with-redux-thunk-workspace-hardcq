export default function(state: boolean = false, action) {
  switch (action.type) {
    case "BEGIN_FETCH":
      return action.progress;
    case "END_FETCH":
      return action.progress;
    default:
      return false;
  }
}
