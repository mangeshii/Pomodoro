import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [initialState, setInitialState] = useState(5)
  const countRef = useRef()

  console.log(countRef.current)

  const handlePlay=()=>{
    clearInterval(countRef.current)
      countRef.current = setInterval(() => {
          setInitialState((cd) => cd - 1);
      }, 1000);
  }

  return (
    <div className="App">
      <button onClick={handlePlay}>Start</button>
      <h1>{initialState}</h1>
    </div>
  );
}

export default App;
