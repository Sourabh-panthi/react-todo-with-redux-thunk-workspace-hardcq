import { connect } from "react-redux";
import TodoAdder from "../components/TodoAdder";
import { addTodo } from "../actions";
import { bindActionCreators } from "redux";
import { addTodoItem } from "../thunks";

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onSubmit: addTodoItem
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(TodoAdder);

// let TodoAdderContainer = ({dispatch}) => {
//   return (
//     <TodoAdder onSubmit={(text) => dispatch(addTodo(text))}/>
//   );
// };

// export default connect()(TodoAdderContainer)
