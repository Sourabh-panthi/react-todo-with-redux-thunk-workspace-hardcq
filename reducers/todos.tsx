export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_TODOS":
      return [...state];
    case "ADD_TODOITEMS":
      return [...state, ...action.todos];
    case "ADD_TODOITEM":
      return [...state, { text: action.text, completed: false, id: action.id }];
    case "TOGGLE_TODOITEM":
      return state.map((item, index) => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        } else return item;
      });
    default:
      return state;
  }
};
