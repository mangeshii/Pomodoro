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
      {/* {!isPaused ? (<button onClick={handlePlay}>Start</button>) : (<button onClick={handlePause}>Pause</button>)}
      <button onClick={handleReset}>Reset</button>
      <h1><FormatTime timeLeft={timeLeft}/></h1> */}
      <div className='containerr'>
        <div className='wrapper'>

        <div className='displayTimeLeftCont'>
          <p className='behaviour'>Session</p>
          <h1 className='time-left'>01:00</h1>
        </div>
        <div className='button-container'>
          {!isPaused ? (<button className='start btnn'>Start</button>) :(<button className='stop btnn'>Stop</button>)}
          <button className='reset btnn'>Reset</button>
        </div>

        <div className='inc-dec-btns '>
          <div className='session-cont col-md-6'>
            <p>Session Length</p>
            <div className='session-btn'>
              <button className='increment btnn'>+</button>
              <div className='displaySessionValue'>25</div>
              <button className='decrement btnn'>-</button>
            </div>
          </div>
          <div className='break-cont col-md-6'>
            <p>Break Length</p>
            <div className='break-btn'>
            <button className='increment btnn'>+</button>
              <div className='displayBreakValue'>5</div>
            <button className='decrement btnn'>-</button>

            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default App;


