import React from 'react';
import {useSelector} from 'react-redux';
import TodosHead from '../components/TodoHead';
import { RootState } from '../modules';

function TodosHeadContainer() {
  const todos = useSelector((state:RootState) => state.todos);

  const undoneTask = todos.filter(todo => !todo.done)

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

  return <TodosHead dateString={dateString} dayName={dayName} undoneTask={undoneTask} />;
}

export default TodosHeadContainer;
