import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';

function App() {
  return (
      <GlobalStyle/>
  );
}


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export default App;
