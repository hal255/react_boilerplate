import React from 'react';
import logo from '../resources/art-assets/logo.svg';
import '../App.css';

function Main() {
  let class_name = "Main_";
  let result = [];
  let i = 0;
  while (i < 5){
    class_name = "Main_" + i;
    result.push(main_helper(class_name));
    i++;
  }

  return result;
}

function main_helper(class_name){
  return (
    <div className={class_name}>
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

export default Main;
