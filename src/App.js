import React, { useState } from 'react';
import {Message} from './Message.js'
import './App.css';

function App() {
  let [count,setCount] = useState (27)
  let [isMorning, setMorning]  = useState(true) 
  
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>BackGround Color = {isMorning ? 'Green' : 'Blue'}</h1>
      <button onClick={()=>setMorning(!isMorning)}>Change Background Color</button>
      <br/>

        <Message counter={count} />
        <br/>
        <button onClick={()=> setCount(count + 1)}>Increase temperature </button>
        <br/>
        <button onClick={()=> setCount(count - 1)}>Decrease temperature </button>
        
           

    </div>
  );
}

export default App;

