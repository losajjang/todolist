import React from 'react';
import styled from 'styled-components';

const TodoNoneBox = styled.div`
  flex: 1;
  display: flex;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  font-size: 26px;
  color: #343a40;
  font-weight: bold;
  transform: translateX(-25%);
`;

function TodoNone() {
  return <TodoNoneBox>작성한 할 일이 없습니다.</TodoNoneBox>;
}

export default TodoNone;
