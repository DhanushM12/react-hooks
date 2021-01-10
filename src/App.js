import react from 'react';
import './App.css';
import UseEffect from './hooks/UseEffect';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <UseState />
      <br /><br />
      <UseEffect />
    </div>
  );
}

export default App;
