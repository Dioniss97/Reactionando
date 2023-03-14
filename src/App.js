import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Home from './pages/Home/index.jsx';

function App() {
  const state = React.useState([]); // useState is a function that returns an array with two elements and the first element is the value of the state and the second element is a function that can be used to update the state.
  const value = state[0]; // value is the value of the state.
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;