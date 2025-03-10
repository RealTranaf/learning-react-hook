import './App.css';
import {useState} from 'react'
function App() {

  const [counter, setCounter] = useState(1);

  // const handleIncrease = () => {
  //   setCounter(counter + 1);
  // }
  const handleIncrease = () => {
    setCounter(prevState => prevState + 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}


export default App;
