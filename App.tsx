import React, { Component } from 'react';
import TodoListContainer from './containers/TodoListContainer';
import TodoAdderContainer from './containers/TodoAdderContainer';
import FilterContainer from './containers/FilterContainer';
import TodoList from './components/TodoList';
import TodoAdder from './components/TodoAdder';
import FilterButton from './components/FilterButton';
import Search from './components/Search';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <FilterContainer />
        <br />
        <div style={{ display: 'flex' }}>
          <TodoAdderContainer /> &nbsp; <Search />
        </div>
        <br />
        <TodoListContainer />
      </div>
    );
  }
}
