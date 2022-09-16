import React from 'react';
import styled from 'styled-components';

const TodoBaseContainer = styled.div`
  background: white;
  width: 500px;
  height: 700px;
  border-radius: 16px;
  position: relative;
  margin: 80px auto 0px auto;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  flex-direction: column;
`;

function TodoBase({children}: {children: React.ReactNode}) {
  return <TodoBaseContainer>{children}</TodoBaseContainer>;
}

export default TodoBase;
