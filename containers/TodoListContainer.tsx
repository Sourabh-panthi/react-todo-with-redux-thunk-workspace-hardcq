import React from "react";
import TodoList from "../components/TodoList";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchTodo, toggleTodoItem } from "../thunks";

const mapStateToProps = state => ({
  todos: state.todos.filter(todo => {
    switch (state.filter) {
      case "SHOW_COMPLETED":
        return todo.completed;
      case "SHOW_PENDING":
        return !todo.completed;
      default:
        return true;
    }
  }),
  progress: state.progress
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onClick: toggleTodoItem,
      fetchData: fetchTodo
    },
    dispatch
  );

// const mapDispatchToProps = dispatch => ({
//   onClick: name => dispatch(toggleTodo(name)),
// });

class TodoListWrapper extends React.Component {
  componentDidMount() {
    let { fetchData } = this.props;
    fetchData();
  }

  render() {
    return <TodoList {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListWrapper);

// const data =  [{ text: "one", completed: true }, { text: "two" }];

// let TodoListContainer = () => <TodoList todos={data} />;

// export default TodoListContainer;
