import React from 'react';
import TodoListContainer from './containers/TodoListContainer';
import {createGlobalStyle} from 'styled-components';
import TodoBase from './containers/TodoBase';
import TodoHeadContainer from './containers/TodoHeadContainer';
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
      <TodoBase>
        <TodoHeadContainer />
        <TodoListContainer />
        <TodoCreateContainer />
      </TodoBase>
    </>
  );
}

export default App;
