import React from 'react';
import styled from 'styled-components';
import {Todo} from '../modules/todos/todos';
import TodoItem from './TodoItem';

type TodoListProps = {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  todos: Todo[];
};

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;

function TodosList({onToggle, onDelete, todos}: TodoListProps) {
  return (
    <TodoListBlock>
      {todos.map(todo => (
        <TodoItem
          onToggle={onToggle}
          onDelete={onDelete}
          todo={todo}
          key={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodosList;
