import { BotonDefault } from "./IngresarNombre";    // importo estilo a utilizar //

function resRonda({ eleJugador, elePc, setGanadorRonda, setVicJugador, vicJugador, vicPc, setVicPc }) {  // funcion que me devuelve el ganador de la ronda, valiendome de las reglas del piedra papel o tijera //
    if (eleJugador === elePc) {                                                                          // ademas actualizo el contador de victorias, o no, segun corresponda // 
        setGanadorRonda(0);
    } else {
        switch (eleJugador) {
            case "piedra":
                if (elePc === "tijera") {
                    setVicJugador(vicJugador + 1)
                    setGanadorRonda(1)

                } else {
                    setVicPc(vicPc + 1)
                    setGanadorRonda(2)
                }
                break;
            case "papel":
                if (elePc === "piedra") {
                    setVicJugador(vicJugador + 1)
                    setGanadorRonda(1)

                } else {
                    setVicPc(vicPc + 1)
                    setGanadorRonda(2)
                }
                break;
            default:
                if (elePc === "papel") {
                    setVicJugador(vicJugador + 1)
                    setGanadorRonda(1)
                } else {
                    setVicPc(vicPc + 1)
                    setGanadorRonda(2)
                }
        }
    }

}


function disableJug({ elePc, eleJugador, ganadorRonda, ganadorJuego }) { // funcion para habilitar el boton de jugar, para prevenir errores, se activara solamente cuando el jugador haya elegido su opcion y //
    if (eleJugador === "" || elePc === "") {                             // la opcion de la pc se haya generado //
        return true;
    } if ((ganadorRonda !== 4) && (ganadorJuego !== 4)) {                // una vez que se haya definido el ganador del juego o la ronda, el boton permanecera desahabilitado //
        return true;
    }
}



function Jugar({ eleJugador, elePc, setGanadorRonda, ganadorRonda, vicPc, vicJugador, setVicJugador, setVicPc }) { // el componente renderiza un boton, que para que este habilitado debe cumplir ciertas condiciones y generara un ganador de ronda una vez que se haga click sobre el //
    return <>

        <BotonDefault onClick={() => { resRonda({ eleJugador, elePc, setGanadorRonda, setVicJugador, vicJugador, vicPc, setVicPc }) }}
            disabled={disableJug({ elePc, eleJugador, ganadorRonda })} >
            Jugar!
        </BotonDefault>
    </>
}

export default Jugar;