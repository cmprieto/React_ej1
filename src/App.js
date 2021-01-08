import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="App-title">Welcome to React</h3>
      </header>
      <section>
        <Saludo/>
      </section>
    </div>
  );
}

export default App;
