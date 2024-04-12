import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// usestate is a react hook responsible for changing the state which means it will propagate the change in the UI/IN THE DOM
 let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => { 
    // counter = counter + 1;
    if (counter >= 20) {
      counter
    } else {
    setCounter(counter + 1)
    }
  }
  
const removeValue = () => {
  if (counter == 0) {
    counter
  } else {
  setCounter(counter - 1)
  }
}

// in react ui updation is controlled by react
  return ( 
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter} </h2>
      
      <button
      onClick={addValue}
      >Add Value {counter}</button> 
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
