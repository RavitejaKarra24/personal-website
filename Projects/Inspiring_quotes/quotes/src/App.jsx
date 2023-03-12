import './App.css';
import quotes from './data.jsx';

function App(){
  return (
    <div className="App">
      <h1>{
        quotes[Math.floor(Math.random() * quotes.length)]
      }</h1>
    </div>
  );
}

export default App;