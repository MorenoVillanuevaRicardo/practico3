import {P1} from "./TiraImagenes"                               //importo estilo de un parrafo definido en otro componente para usar en este componente //
import {BotonDefault} from "./IngresarNombre"                   //importo estilo de un boton definido en otro componente para usar en este componente //
import styled from "styled-components";                        // importo la libreria para dar formato al componente //

//aplico estilos//
export const InputC = styled.input`   
    text-align: center;
    font-size: x-large;
    font-style: oblique;
    width: fit-content;
    font-weight: bolder;
`

function terminaRonda({ setFinalizar }) {   //funcion para deshabilitar el boton de siguiente ronda, una vez que se haya avanzado a la siguiente ronda //
    setFinalizar(true);
}


function DatosJuego({ ronda, setRonda, finalizar, setFinalizar, vicPc, vicJugador }) {   //componente que devuelve el contador de ronda y un boton para avanzar a la siguiente ronda //
    return (<>
        <div >
            <P1 >Ronda Numero <InputC type="number" value={ronda} disabled /> </P1>
            <BotonDefault onClick={() => {              
                setRonda(ronda + 1);
                terminaRonda({ setFinalizar });
            }}
                disabled={finalizar} >
                Siguiente Ronda
            </BotonDefault>
        </div>
    </>
    )
}

export default DatosJuego;
