import React, {ChangeEvent, useState} from 'react';
import TodoCreate from '../components/TodoCreate';

function TodoCreateContainer() {
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log(value);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') {
      alert('할 일을 입력해 주세요!');
      return;
    }
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
