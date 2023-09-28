import { InputC } from "./DatosJuego"; //importo estilos que voy a reutilizar en este componente //
import {P1} from "./TiraImagenes"

function DatosMaquina({ vicPc}) {     // componente donde se muestra el nombre de la maquina y su contador de victoria //
    return (
        <>
            <div>
                <P1>El nombre de la maquina es : R2D2 </P1>
                <P1>Victorias Maquina : <InputC type="number" name="vicPc" value={vicPc} disabled /></P1>            
            </div>
        </>
    )
}

export default DatosMaquina;