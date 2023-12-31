import React, { useState } from 'react'
import Display from './components/disp'
import Keypad from './components/keepad'
import './App.css';

const App = () => {
  const [expresion, setExpresion] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div className='App'>

      <div className='d-flex flex-column'>
        <Display expresion={expresion} answer={answer} />
        <Keypad expresion={expresion} setExpresion={setExpresion} answer={answer} setAnswer={setAnswer} />
      </div>

    </div>
  )
}

export default App