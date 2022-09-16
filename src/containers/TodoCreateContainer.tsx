import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import TodoCreate from '../components/TodoCreate';
import {addTodo} from '../modules/todos/todos';

function TodoCreateContainer() {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const onToggle = () => setOpen(!open);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') {
      alert('할 일을 입력해 주세요!');
      return;
    }
    dispatch(addTodo(value));
    setValue('');
    setOpen(false);
  };

  return (
    <TodoCreate
      onToggle={onToggle}
      open={open}
      value={value}
      onSubmit={onSubmit}
      onChange={onChange}
    />
  );
}

export default TodoCreateContainer;
