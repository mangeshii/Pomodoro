import {useRef, useState } from 'react';
import './App.css';

function App() {

  const [initialState, setInitialState] = useState(500)
  const [isPause, setPause] = useState(false)
  const countRef = useRef()

  const formatTime = () => {
    const getSecond = `0${initialState % 60}`.slice(-2);
    const minutes = `${Math.floor(initialState / 60)}`;
    const getMinute = `0${minutes % 60}`.slice(-2);

    return ` ${getMinute} : ${getSecond} `;
  };

  const handlePlay = () => {
    setPause(true)
    clearInterval(countRef.current)
    countRef.current = setInterval(() => {
      setInitialState((cd) => cd - 1);
    }, 1000);
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setPause(false)
  }
  return (
    <div className="App">
      <button onClick={handlePlay}>Start</button>
      <button onClick={handlePause}>Pause</button>

      <h1>{formatTime()}</h1>
    </div>
  );
}

export default App;
