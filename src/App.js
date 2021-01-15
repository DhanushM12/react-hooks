import UseEffect from './hooks/UseEffect';
import UseState from './hooks/UseState';
import './App.css';
import UseContext from './hooks/UseContext';
import UseMemo from './hooks/UseMemo';
import UseRef from './hooks/UseRef';
import UseCallback from './hooks/UseCallback';


function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <UseState />
      <br /><br />
      <UseEffect />
      <br /> <br/>
      <UseContext />
      <br /> <br/>
      <UseMemo />
      <br /> <br/>
      <UseRef />
      <br /> <br/>
      <UseCallback />
    </div>
  );
}

export default App;
