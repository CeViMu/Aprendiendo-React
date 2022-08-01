import React from "react";
import logo from './logo.svg';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import "./App.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre"></input>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
       <section>
        <Componente msg="Hola soy un componente desde una prop"></Componente> 
        <hr></hr>
        <Propiedades 
        cadena="Esto es una cadena de texto" 
        numero={19} 
        booleano={true}
        arreglo = {[1,2,3]}
        objeto = {{nombre: "Cecy", correo: "cec@hotmail.com"}}
        funcion={num => num*num}
        elementoReact={<i>Esto es un elemento React</i>}
        componenteReact={<Componente msg="Soy un componente pasado como prop"></Componente>}>
        </Propiedades>

      </section>
      </header>
    </div>
  );
}

export default App;
