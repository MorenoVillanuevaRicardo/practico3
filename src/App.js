
import Juego from "./Componentes/Juego";                          // importo el componente Juego //
import React from "react";
import IngresarNombre from "./Componentes/IngresarNombre";         // importo el componente IngresarNombre //
import { useState } from "react";
import Encabezado from "./Componentes/Encabezado";                // importo el componente Encabezado //
import styled from "styled-components";                           // importo la libreria para dar formato al componente //

//aplico estilos //
const DIV = styled.div`   
 margin: 0;
 background: linear-gradient(to bottom right,  blue,pink);
 background-color: black;  
`


function App() {
  const [nombreJugador, setNombreJugador] = useState(""); // declaro el estado del nombre del jugador y lo inicializo en ""//
  const [display, setDisplay] = useState("block")     // declaro el estado de display y lo inicializo en block //


  return (
    <DIV>
      <Encabezado />   {/* renderizo el componente Encabezado  */}
      <IngresarNombre nombreJugador={nombreJugador} setNombreJugador={setNombreJugador} display={display} setDisplay={setDisplay} />  {/* renderizo el componente IngresarNombre y le paso props para manejar su visibilidad */}
      {nombreJugador !== "" &&
        <Juego nombreJugador={nombreJugador} />}  {/* Si se cumple que el estado nombreJugador sea distinto de vacio, renderizo el componente juego, que representa la interfaz del juego */}
    </DIV>
  );
}

export default App;  
