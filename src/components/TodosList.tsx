import React from 'react';
import TodoItem from './TodoItem';

type TodoListProps = {
  onToggle: () => void;
  done: boolean;
};

function TodosList({done, onToggle}: TodoListProps) {
  return <TodoItem done={done} onToggle={onToggle} />;
}

export default TodosList;
