import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import "./index.css"
import TodoList from './components/List.jsx';

var destination = document.querySelector("#app");

ReactDOM.render(
  <div> 
    <p> Helllllloooo</p>
    <TodoList/>
  </div>, 
  destination
);