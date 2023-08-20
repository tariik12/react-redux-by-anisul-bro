import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from './Services/Actions/CounterActions';

function App() {
  const counts = useSelector(state =>state.count)
  const dispatch = useDispatch();
  //use react count

  console.log(counts)
  const [count, setCount] = useState(0)

  const handleIncrement = ()=>{
    setCount((count) =>count+1);
  }
  const handleDecrement = ()=>{
    setCount((count) =>count-1);
  }
  const handleReset = ()=>{
    setCount(0);
  }
  const handleReduxIncrement = ()=>{
   dispatch(incrementCounter())
  }
  const handleReduxDecrement = ()=>{
    dispatch(decrementCounter());
  }
  const handleReduxReset = ()=>{
    dispatch(resetCounter());
  }
// use redux


  return (
    <>
      use react count
      <h1>React & Redux</h1>
      <p>count is : {count}</p>
      <div className="card">
        <button onClick={handleIncrement}>
          increment
        </button>
        <button onClick={handleDecrement}>
          decrement
        </button>
        <button onClick={handleReset}>
          reset
        </button>
        
      </div>
      use redux
      <div>
        {/* 
        1.state- count : 0
        2.actions - increment, decrement, reset
        3.reducers - 
        4. store
        5. providing store in react
        6 use store


        */}
      <h1>React & Redux</h1>
      <p>count is : {counts}</p>
      <div className="card">
        <button onClick={handleReduxIncrement}>
          increment
        </button>
        <button onClick={handleReduxDecrement}>
          decrement
        </button>
        <button onClick={handleReduxReset}>
          reset
        </button>
        
      </div>
      use redux
      <div></div>
      </div>
    </>
  )
}

export default App
