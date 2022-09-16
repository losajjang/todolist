import React from 'react';
import {MdDone, MdDelete} from 'react-icons/md';
import styled, {css} from 'styled-components';
import {Todo} from '../modules/todos/todos';

type TodoItemProps = {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  todo: Todo;
};

type TodoItemDoneProps = {
  done: boolean;
};

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee3e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  /* display: none; */
`;

const TodoItemBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: flex;
    }
  }
`;

const CheckCircle = styled.div<TodoItemDoneProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: :1px solid #38d9a9;
      color: #38d9a9;
     `}
`;

const Text = styled.div<TodoItemDoneProps>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

function TodoItem({onToggle, onDelete, todo}: TodoItemProps) {
  const handleToggle = () => onToggle(todo.id);

  const handleDelete = () => onDelete(todo.id);

  return (
    <TodoItemBox>
      <CheckCircle done={todo.done} onClick={handleToggle}>
        {todo.done && <MdDone />}
      </CheckCircle>
      <Text done={todo.done}>{todo.text}</Text>
      <Remove onClick={handleDelete}>
        <MdDelete />
      </Remove>
    </TodoItemBox>
  );
}

export default TodoItem;
