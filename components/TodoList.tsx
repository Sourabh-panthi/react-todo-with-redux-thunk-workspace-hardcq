import React from 'react';
import TodoItem from './TodoItem';
//import useFilter from '../hooks/useFilter';

let TodoList = ({ progress, todos, onClick }) => {

  // let filteredData = useFilter(
  //   state => state.search.text,
  //   state => state.search.mode,
  //   state => state.todos,
  //   reducer => [reducer.text],
  //   null
  // );

  return progress ? (
    <div>...Loading</div>
  ) : (
    <div className="todo-list">
      <ul>
        {todos.map((item, index) => (
          <TodoItem key={item.id} {...item} onClick={() => onClick(item.id)} />
        ))}
      </ul>
    </div>
  );

  {
    //<TodoItem text={item.text} completed={item.completed} onClick={() => onClick(item.text)} />
  }
};

export default TodoList;
