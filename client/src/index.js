import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from './theme';
import {ThemeProvider} from "@emotion/react";

// document.body.addEventListener('touchmove', function(e){
//   e.preventDefault();
// }, { passive: false });

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
