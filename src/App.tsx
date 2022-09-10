import React from 'react';
import TodosContainer from './containers/TodosListContainer';
import styled, {createGlobalStyle} from 'styled-components';
import TodosBase from './containers/TodosBase';
import TodosHeadContainer from './containers/TodosHeadContainer';
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
