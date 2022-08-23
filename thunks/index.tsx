import {
  beginFetch,
  endFetch,
  addTodos,
  addTodo,
  toggleTodo
} from "../actions";

export function fetchTodo() {
  return function(dispatch, getState) {
    dispatch(beginFetch());
    fetch("https://e4skx.sse.codesandbox.io/api/v1.0/todos")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        //console.log(res);
        let data = res.map(item => {
          return {
            text: item.name,
            completed: item.completed,
            id: item._id
          };
        });
        dispatch(addTodos(data));
        dispatch(endFetch());
        //return data;
      });
  };
}

export function addTodoItem(name) {
  return function(dispatch, state) {
    fetch(`https://e4skx.sse.codesandbox.io/api/v1.0/todos`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(addTodo(name, res._id));
      });
  };
}

export function toggleTodoItem(id) {
  console.log(id);
  return function(dispatch, state) {
    fetch(`https://e4skx.sse.codesandbox.io/api/v1.0/todos/${id}`, {
      method: "put"
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(toggleTodo(id));
      });
  };
}
