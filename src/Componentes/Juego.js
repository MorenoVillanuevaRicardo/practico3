import DatosJuego from "./DatosJuego";               //importo componente a renderizar en este componente //
import Jugar from "./Jugar";                            //importo componente a renderizar en este componente //
import DatosJugador from "./DatosJugador";            //importo componente a renderizar en este componente //
import DatosMaquina from "./DatosMaquina";            //importo componente a renderizar en este componente //
import { useEffect, useState } from "react";           //importo los hooks que voy a usar en este componente //
import React from "react";
import TiraImagenes from "./TiraImagenes"            // importo componente a renderizar en este componente //
import styled from "styled-components";              // importo la libreria para dar formato al componente //
import { P1 } from "./TiraImagenes"                 //importo estilo de un parrafo definido en otro componente para usar en este componente //

//aplico estilos//
const DIV1 = styled.div`
 display: flex;
 justify-content: center; 
`
//aplico estilos//
const BotonDeReset = styled.button`    
    position : absolute; 
    top: 15px;
    right: 15px;
    text-align: center;
    font-size: x-large;
    font-style: oblique;
    width: fit-content;
    font-weight: bolder;
    background: blue;
    
`
//aplico estilos//
const DIV2 = styled.div`
align-items: center;
justify-content: center;
 display: flex;
 width: 33%;
 background-color: rgb(22, 130, 244);
 border: 5px solid rgb(22,130,244); 
`
//aplico estilos//
const DIV3 = styled.div` 
flex-direction: column;
 width: 33%;
 display: flex;
 background-color: rgb(68, 141, 140);
 border: 5px solid rgb(68, 141, 140); 
 align-items: center;
`
//aplico estilos//
const DIV4 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction : column;
    width:33%;
    background-color: rgb(230, 86, 102);
`

const textosJuego = ["El juego termino en empate", "El ganador del juego fue el jugador", "El ganador del juego fue la computadora"];  //array con los distintos resultados del juego //
const textosRonda = ["La ronda termino en empate", "La ronda fue ganada por el jugador", "La ronda fue ganada por la computadora"];   // array con los distintos resultados de las rondas //
const jugadas = ["piedra", "papel", "tijera"];   // array con las posibles jugadas //


function actualizar() {             // function que se invoca cuando se oprime el boton de reiniciar juego, que precisamente actualiza la pagina volviendo sus valores a los valores por defecto //
    window.location.reload();
}


function Juego({ nombreJugador }) {                         // inicializando estados para controlar el juego //
    const [eleJugador, setEleJugador] = useState("");           // representa la eleccion del jugador //
    const [elePc, setElePc] = useState("")                     // representa la eleccion de la pc//
    const [ronda, setRonda] = useState(1);                     // representa el numero de ronda, se inicializa en 1 //
    const [finalizar, setFinalizar] = useState(true);          // este estado sirve para controlar el boton de siguiente ronda //
    const [ganadorRonda, setGanadorRonda] = useState(4)        // representa el ganador de la ronda //
    const [ganadorJuego, setGanadorJuego] = useState(4);       // representa el ganador del juego//
    const [vicJugador, setVicJugador] = useState(0);          // "contador" de victorias del jugador //
    const [vicPc, setVicPc] = useState(0);                    // "contador" de victorias de la pc//  
    const [jugada, setJugada] = useState(false)               // estado que representa si la ronda se jugo o no //




    function obtenerJugadaComputadora() {                //funcion que me permite obtener un numero aleatorio y usarlo como subindice  en el arreglo de posibles jugadas, para obtener la jugada de la pc//
        let numero = Math.round((Math.random() * 2))
        setElePc(jugadas[numero]);
    }

    useEffect(() => {      // este fragmento de codigo, utilizando el hook useEffect, reacciona al cambio de ronda, reseteando los estados //
        setEleJugador("");
        setElePc("");
        setGanadorRonda(4);
        setJugada(false);
    }, [ronda]);

    useEffect(() => {        // este fragmento de codigo, utilizando el hook useEffect, reacciona al cambio a cuando el jugador realiza la eleccion de su opcion, llamando a la funcion para obtener la jugada de la pc //    
        if (eleJugador !== "") {
            setTimeout(() => {
                obtenerJugadaComputadora({});
            }, 500)
            clearTimeout();
        }
    }, [eleJugador]);

    useEffect(() => {       // este fragmento de codigo, utilizando el hook useEffect, controla que se pueda avanzar a la siguiente ronda //
        if (ganadorRonda !== 4) {   // si el estado ganadorRonda es distinto del valor por defecto //
            setJugada(true);        // cambia el estado de jugada a verdadero //
            setFinalizar(false);    // habilita el boton para avanzar a la siguiente ronda //
        }
        if (ganadorJuego !== 4) {   // si el estado ganadorJuego es distinto del valor por defecto, es decir, existe un resultado del juego //
            setFinalizar(true);     // desabilita el boton de siguiente ronda //  
        }

    }, [ganadorRonda, ganadorJuego]);

    useEffect(() => {             // bloque de codigo para setear el ganador del juego //
        if (jugada === true) {     // si la ronda fue jugada se verifican las condiciones de finalizacion del juego y de acuerdo a ellas, se decide el ganador o el empate //
            if (((vicPc === 3) || (vicJugador === 3) || (ronda === 5))) {

                if (vicPc === vicJugador) {
                    setGanadorJuego(0)
                } else {
                    if (vicPc > vicJugador) {
                        setGanadorJuego(2)
                    } else {
                        setGanadorJuego(1)
                    }
                }
            }
        }
    }, [jugada, ronda, vicJugador, vicPc]);


    return (  //renderizo los distintos componentes, se le pasan las propiedades necesarias para que puedan realizar sus funciones segun lo pense //
        <>
            <DIV1>
                <DIV2>
                    <DatosJugador nombreJugador={nombreJugador} eleJugador={eleJugador} vicJugador={vicJugador} />
                </DIV2>
                <DIV3>
                    <TiraImagenes setEleJugador={setEleJugador} eleJugador={eleJugador} ronda={ronda} />
                    <Jugar eleJugador={eleJugador} ronda={ronda} elePc={elePc} vicPc={vicPc} vicJugador={vicJugador} setVicJugador={setVicJugador} setVicPc={setVicPc} setGanadorRonda={setGanadorRonda} ganadorRonda={ganadorRonda} />
                    <DatosJuego ronda={ronda} setRonda={setRonda} finalizar={finalizar} setFinalizar={setFinalizar} vicPc={vicPc} vicJugador={vicJugador} />
                    {(ganadorRonda !== 4 && jugada === true) && <P1>{textosRonda[ganadorRonda]}</P1>}  {/* se renderiza el resultado de la ronda, segun se cumplan las condiciones  */}
                    {(ganadorJuego !== 4 && jugada === true) && <P1>{textosJuego[ganadorJuego]}</P1>}   {/* se renderiza el resultado del juego, segun se cumplan las condiciones  */}
                </DIV3>
                <DIV4>
                    <DatosMaquina vicPc={vicPc} ele={elePc} jugada={jugada} />
                    {(ganadorRonda !== 4 && jugada === true) && <P1>La eleccion de la pc fue  {elePc}</P1>}  {/* se renderiza la opcion de la maquina una vez finalizada la ronda, para ponerle mas emocion  */}
                </DIV4>
            </DIV1>
            <BotonDeReset onClick={actualizar}>Reiniciar Juego</BotonDeReset>  {/* boton para reiniciar el juego  */}
        </>
    )
}

export default Juego;