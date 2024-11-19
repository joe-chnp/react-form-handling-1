import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState('New Greeting Message');
  const [input, setInput] = useState('');
  const handleClick = () => {setMessage(input)};
  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="input-container">
        <label htmlFor="greeting-message"></label>
        <input id="greeting-message" type="text" value={input} onChange={(event) => {setInput(event.target.value)}}/>
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
