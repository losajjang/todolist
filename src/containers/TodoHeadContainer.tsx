import React from 'react';
import TodosHead from '../components/TodoHead';

function TodosHeadContainer() {
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', {weekday:'long'}) 

  return <TodosHead dateString={dateString} dayName={dayName}/>;
}

export default TodosHeadContainer;
