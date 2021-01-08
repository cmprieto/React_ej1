import logo from "./logo.svg";
import "./App.css";
import Saludo from "./components/Saludo";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      contador:0
    }
  }

  incremento(){
    this.setState({contador:this.state.contador+1});
  }
  decremento(){
    this.setState({contador:this.state.contador-1});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">Welcome to React</h3>
        </header>
        <section>
          <Saludo contador={this.state.contador} incrementHandler={this.incremento.bind(this)} decrementHandler={this.decremento.bind(this)}/>
        </section>
      </div>
    );
  }
}

export default App;
