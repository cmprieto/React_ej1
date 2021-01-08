import React, { Component } from "react";
class Saludo extends Component {
  render() {
    return (
      <div>
         <h3>El valor del contador es:  {this.props.contador}</h3>
         <button onClick={this.props.incrementHandler}>Incremento</button>
         <button onClick={this.props.decrementHandler}>Decremento</button>
        <br/><br/><br/>
      </div>
    );
  }
}
export default Saludo;
