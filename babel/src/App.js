import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function agregarMensaje(clase) {
  clase.prototype.mensaje = "HOLA MUNDO";
}

@agregarMensaje
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.mensaje}
        </p>
      </div>
    );
  }
}

export default App;
