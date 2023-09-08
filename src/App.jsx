import './App.css'
import Counter from './counter'

function App() {
  function handleClick (){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('clicked button 2')
}
const addOfFour = (four) =>{
  alert(four+5)
}
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click me2</button>
      <button onClick={() => {alert('inline function')}}>Clicked button 3</button>
      <button onClick={() => addOfFour(5)}>add four</button>
      <Counter></Counter>


    </>
  )
}

export default App
