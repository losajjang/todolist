import React, {useState} from 'react';
import TodosList from '../components/TodoList';

function TodosListContainer() {
  const [done, setDone] = useState(false);
  const onToggle = () => {
    setDone(!done);
  };

  return <TodosList done={done} onToggle={onToggle} />;
}

export default TodosListContainer;