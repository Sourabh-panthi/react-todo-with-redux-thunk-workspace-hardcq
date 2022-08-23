export function addTodo(text: string, id: string) {
  return {
    type: "ADD_TODOITEM",
    text: text,
    id: id
  };
}

export function toggleTodo(id: string) {
  return {
    type: "TOGGLE_TODOITEM",
    id: id
  };
}

export function setSearchText(text:string, mode: string){
  return {
    type: 'SET_SEARCH_TEXT',
    text: text,
    mode: mode
  }
}

export function setDropDownText(text:string){
  return {
    type: 'SET_DROPDOWN_TEXT',
    text: text,
  }
}

export function setVisibility(filter: VisibilityFilter) {
  return {
    type: "SET_VISIBILITY",
    visibility: filter
  };
}

export function beginFetch() {
  return {
    type: "BEGIN_FETCH",
    progress: true
  };
}

export function endFetch() {
  return {
    type: "END_FETCH",
    progress: false
  };
}

export function addTodos(todos) {
  return {
    type: "ADD_TODOITEMS",
    todos: todos
  };
}

export enum VisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}
