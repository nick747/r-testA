import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function MyButton({ onClick }) {
  return (
    <button id='myButton' onClick={onClick}>+</button>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <>
      <div id='appBar'>
        <h1>Flutter Demo Home Page</h1>
      </div>
      <div id='page'>
        <label>You have pushed the button this many times:</label>
        <h1>{counter}</h1>
      </div>
      <MyButton onClick={incrementCounter} />
    </>
  );
}

export default App;
