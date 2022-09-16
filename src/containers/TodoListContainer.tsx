import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodosList from '../components/TodoList';
import {RootState} from '../modules';
import {deleteTodo, toggleTodo} from '../modules/todos/todos';

function TodosListContainer() {
  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const onDelete = (id: number) => dispatch(deleteTodo(id));

  const onToggle = (id: number) => dispatch(toggleTodo(id));

  return <TodosList onToggle={onToggle} todos={todos} onDelete={onDelete} />;
}

export default TodosListContainer;
