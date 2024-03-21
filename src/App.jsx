import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setMessage] = useState(0);
  const [bmi, setBmi] = useState(0);

/// logic 
 let calcBmi =(e)=>{
   e.preventDefault();
  if(weight===0|| height===0){
    alert('please enter a valid weight and height')
  }
  else{
    let bmi = (weight/(height*height)*703)
    setBmi(bmi.toFixed(1))

    if(bmi<25){
      setMessage('you are under weight')
    }
    else if(bmi>-25 && bmi<30){
      setMessage('you are healthy weight person')
    }
    else{
      setMessage('you are over weight')
    }
  }
 }
 ///
 let reload =()=>{
  window.location.reload()
 }
  return (
 <div className='App'>
   <div className='container'>
    <h2>BMI CALCULATOR</h2>
    <form onSubmit={calcBmi}>
      <div>
        <label>Weight(lbs)</label>
        <input 
        type='text'
        value={weight}
        placeholder='Enter the Weight Value'
        onChange={(e)=>setWeight(e.target.value)}
         />
      </div>
      <div>
        <label>Height(in)</label>
        <input type='text'
        value={height}
         placeholder='Enter the Weight Value'
         onChange={(e)=>setHeight(e.target.value)}/>
      </div>
        <div>
          <button className='btn' type='submit'>Submit</button>
          <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
        </div>
        <div className='center'>
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
    </form>
   </div>
 </div>
  )
}

export default App
