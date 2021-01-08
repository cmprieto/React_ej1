import React, { Component } from "react";
class Saludo extends Component {
  render() {
    return (
      <div>
        <h2>¡Hola {this.props.nombre}! </h2>
        {/* <button onClick={() => alert("Funciona")}>Haz click</button> */}
         
        <button onClick={this.props.clickHandler}>Haz click</button>
         <br/><br/><br/>
      </div>
    );
  }
}
export default Saludo;
