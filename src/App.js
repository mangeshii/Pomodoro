import { useEffect, useRef, useState } from 'react';
import './App.css';
import FormatTime from './FormatTime';

function App() {

  const [timeLeft, settimeLeft] = useState(5*60)
  const [isPaused, setPause] = useState(false)
  const countRef = useRef()


  const handlePlay = () => {
    setPause(true)
      countRef.current = setInterval(() => {
        settimeLeft((cd) => cd - 1);
      }, 1000);

  }

  useEffect(()=>{
    if(timeLeft===0){
      clearInterval(countRef.current)
    }
  },[timeLeft])


  const handlePause = () => {
    clearInterval(countRef.current)
    setPause(false)
  }

  const handleReset=()=>{
    clearInterval(countRef.current)
    settimeLeft(5*60)
  }


  return (
    <div className="App">
      {!isPaused ? (<button onClick={handlePlay}>Start</button>) : (<button onClick={handlePause}>Pause</button>)}
      <button onClick={handleReset}>Reset</button>
      <h1><FormatTime timeLeft={timeLeft}/></h1>
    </div>
  );
}

export default App;


