import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const myMainComponent = ReactDOM.render(<App />,
  document.getElementById('root'));

console.log(myMainComponent);