import React from 'react';
import TodosContainer from './containers/TodoListContainer';
import styled, {createGlobalStyle} from 'styled-components';
import TodosBase from './containers/TodoBase';
import TodosHeadContainer from './containers/TodoHeadContainer';
import TodoCreateContainer from './containers/TodoCreateContainer';

const GlobalStyle = createGlobalStyle`
body{ 
  background: #e9ecef;
} 
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodosBase>
        <TodosHeadContainer />
        <TodosContainer />
        <TodoCreateContainer />
      </TodosBase>
    </>
  );
}

export default App;
