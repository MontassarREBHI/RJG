/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

function App() {
  const [quote,setQuote] = useState("click to get a new quote!")

const fetchQuote = async () => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setQuote(data);
  } catch (error) {
    console.error('Error fetching a new quote:', error);
  }
};


return (
  <div id="quote-box">
    <p>{quote.setup ? quote.setup : "Click the button for a joke!"}</p>
    {quote.punchline && <p>{quote.punchline}</p>}
    <button onClick={fetchQuote}>New Joke</button>
  </div>
);

}

export default App
