import { useEffect, useRef, useState } from 'react';
import './App.css';
import FormatTime from './FormatTime';

function App() {

  const [isPaused, setPause] = useState(false);
  const [session, setSession] = useState(25);
  const [breakk, setBreak] = useState(5);
  const [timeLeft, settimeLeft] = useState(25 * 60);
  console.log(timeLeft)
  const [behaviour, setBehaviour] = useState('Session')

  const countRef = useRef()

  const switchesTimerMode = () => {
    if (behaviour == 'Session') {
      setBehaviour('Break')
      settimeLeft(breakk*60)
    }
    else {
      setBehaviour('Session')
      settimeLeft(session)
    }
  }

  const handlePlay = () => {
    setPause(true)

      countRef.current = setInterval(() => {
        settimeLeft((cd) => cd - 1);
      }, 1000);

  
  }

  useEffect(()=>{
    if(timeLeft==0){
      switchesTimerMode()
    }
  })

  const sessionIncrement = () => {
    if (session <= 59) {
      setSession(session + 1)
      settimeLeft((session + 1) * 60)

    }
  }

  const sessionDecrement = () => {
    if (session > 1) {
      setSession(session - 1)
      settimeLeft((session - 1) * 60)
    }
  }


  const breakIncrement = () => {
    if (breakk <= 59) {
      setBreak(breakk + 1)
    }
  }


  const breakDecrement = () => {
    if (breakk > 1) {
      setBreak(breakk - 1)
    }
  }


 


  const handlePause = () => {
    clearInterval(countRef.current)
    setPause(false)
  }

  const FormatTime = () => {
    const getSecond = `0${timeLeft % 60}`.slice(-2);
    const minutes = `${Math.floor(timeLeft / 60)}`;
    const getMinute = `0${minutes % 60}`.slice(-2);

    return ` ${getMinute} : ${getSecond} `;
  }

  return (
    <div className="App">
      <div className='containerr'>
        <div className='wrapper'>

          <div className='displayTimeLeftCont'>
            <p className='behaviour'>{behaviour}</p>
            <h1 className='time-left'>{FormatTime()}</h1>
          </div>
          <div className='button-container'>
            {!isPaused ? (<button className="start btnn" onClick={handlePlay}>Start</button>) : (<button className="stop btnn" onClick={handlePause}>Pause</button>)}
            <button className='reset btnn'>Reset</button>
          </div>

          <div className='inc-dec-btns '>
            <div className='session-cont col-md-6'>
              <p>Session Length</p>
              <div className='session-btn'>
                <button className='increment btnn' onClick={sessionIncrement}>+</button>
                <div className='displaySessionValue'>{session}</div>
                <button className='decrement btnn' onClick={sessionDecrement}>-</button>
              </div>
            </div>
            <div className='break-cont col-md-6'>
              <p>Break Length</p>
              <div className='break-btn'>
                <button className='increment btnn' onClick={breakIncrement}>+</button>
                <div className='displayBreakValue'>{breakk}</div>
                <button className='decrement btnn' onClick={breakDecrement}>-</button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;



{/* {!isPaused ? (<button onClick={handlePlay}>Start</button>) : (<button onClick={handlePause}>Pause</button>)}
<button onClick={handleReset}>Reset</button>
// const [timeLeft, settimeLeft] = useState(5*60)
// const [isPaused, setPause] = useState(false)

// const countRef = useRef()


// const handlePlay = () => {
//   setPause(true)
//     countRef.current = setInterval(() => {
//       settimeLeft((cd) => cd - 1);
//     }, 1000);

// }

// useEffect(()=>{
//   if(timeLeft===0){
//     clearInterval(countRef.current)
//   }
// },[timeLeft])


// const handlePause = () => {
//   clearInterval(countRef.current)
//   setPause(false)
// }

// const handleReset=()=>{
//   clearInterval(countRef.current)
//   settimeLeft(5*60)
// }
<h1><FormatTime timeLeft={timeLeft}/></h1> */}