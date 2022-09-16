import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from '../components/TodoList';
import TodoNone from '../components/TodoNone';
import {RootState} from '../modules';
import {deleteTodo, toggleTodo} from '../modules/todos/todos';

function TodoListContainer() {
  const todos = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  const onDelete = (id: number) => dispatch(deleteTodo(id));

  const onToggle = (id: number) => dispatch(toggleTodo(id));

  return (
    <>
      {todos.length === 0 ? (
        <TodoNone />
      ) : (
        <TodoList onToggle={onToggle} todos={todos} onDelete={onDelete} />
      )}
    </>
  );
}

export default TodoListContainer;
