import React from 'react';
import logo from '../resources/art-assets/logo.svg';
import '../App.css';

// main brings in all components together
function TestClass() {
  let id = "Main_";
  let result = [];
  let i = 0;
  while (i < 2) {
    id = "Main_" + i;
    result.push(test_helper(id));
    i++;
  }

  return result;
}

function test_helper(id) {
  return (
    <div id={id}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default TestClass;
