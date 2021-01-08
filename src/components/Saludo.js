import React, { Component } from "react";
class Saludo extends Component {
  render() {
    return <h2>¡Hola {this.props.nombre}! </h2>;
  }
}
export default Saludo;
