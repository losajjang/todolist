import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

type TodoListProps = {
  onToggle: () => void;
  done: boolean;
};

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px 48px 32px;
  overflow-y: auto;
`;

function TodosList({done, onToggle}: TodoListProps) {
  return (
    <TodoListBlock>
      <TodoItem done={done} onToggle={onToggle} />
    </TodoListBlock>
  );
}

export default TodosList;
