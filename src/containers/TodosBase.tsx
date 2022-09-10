import React from 'react';
import styled from 'styled-components';

const TodosBaseContainer = styled.div`
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

function TodosBase({children}: {children: React.ReactNode}) {
  return <TodosBaseContainer>{children}</TodosBaseContainer>;
}

export default TodosBase;
