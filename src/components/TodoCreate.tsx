import React, {FormEvent, useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';

type TodoCreateProps = {
  open: boolean;
  onToggle: () => void;
  value: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type TodoCreateOpenProps = {
  open: boolean;
};

const CircleButton = styled.button<TodoCreateOpenProps>`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InputFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InputForm = styled.form`
  background: #f8f9fa;
  padding: 30px 30px 70px 30px;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee3e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate({
  open,
  onToggle,
  value,
  onSubmit,
  onChange,
}: TodoCreateProps) {
  return (
    <>
      {open && (
        <InputFormPositioner>
          <InputForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="할 일을 입력해 주세요!"
              value={value}
              onChange={onChange}
            />
          </InputForm>
        </InputFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default TodoCreate;
