import { InputC } from "./DatosJuego";
import { P1 } from "./TiraImagenes";


function DatosJugador({ nombreJugador, vicJugador, eleJugador }) {      //componente con los datos del jugador, tanto nombre, cantidad victorias y la opcion elegida //
    return (
        <>
            <div>
                <P1>Nombre : {nombreJugador}</P1>
                <P1> Victorias jugador : <InputC type="number" name="vicJugador" value={vicJugador} disabled /></P1>
                {eleJugador !== "" && <P1> El jugador eligio {eleJugador}</P1>} {/* una vez hecha la eleccion, se renderiza el parrafo con la opcion del jugador */}
            </div>
        </>
    )
}   

export default DatosJugador;