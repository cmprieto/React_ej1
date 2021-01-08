import logo from "./logo.svg";
import "./App.css";
import Saludo from "./components/Saludo";
import { Component } from "react";

class App extends Component {
/*   constructor(props) {
    super(props)
    this.doSomething = this.doSomething.bind(this)
  } */

  doSomething(){
    alert("Funciona");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="App-title">Welcome to React</h3>
        </header>
        <section>
          <Saludo nombre="Montse" clickHandler={this.doSomething.bind(this)}/>          
        </section>
      </div>
    );
  }
}

/* class doSomething extends Component{
  render(){
    return(
      <div>
        Salta el evento
      </div>
    );
  }
} */
export default App;
