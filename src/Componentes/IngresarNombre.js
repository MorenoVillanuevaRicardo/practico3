import { useState } from "react";      //importo el hook use state para poder usarlo //
import styled from "styled-components"; // importo la libreria para dar formato al componente //

//aplico estilos//
const IngreName = styled.div`
    display: flex;
    background-color: rgb(62, 34, 224);
    height: 500px;
    border: 5px inset rgb(62, 34, 224);
    align-items: center;
    justify-content: center;    
    
`
//aplico estilos//
const Input = styled.input`  
    text-align: center;
    font-size: large;
    font-style: oblique;
    width: 300px;
    font-weight: bolder;
    height: 35px;
    

`
//aplico estilos//
export const BotonDefault = styled.button`
    display:flex;
    text-align: center;
    font-size: x-large;
    font-style: oblique;
    width: fit-content;
    font-weight: bolder;
    margin: auto;
`


function IngresarNombre({ setNombreJugador }) {    // componente que actualiza el estado nombreJugador //
    const [display, setDisplay] = useState("flex")     // estado para que el componente sea visible, una vez que obtiene un nombre de jugador valido, se oculta //
    return (<>
        <IngreName style={{ display: display }}>
            <form                  //formulario para capturar el nombre introducido por el usuario //
                onSubmit={ev => {              // controlador de eventos para cuando se envie el formulario, que modifica el estado nombreJugador y luego oculta el formulario //
                    ev.preventDefault(); 
                    setNombreJugador(ev.target.nombreJugador.value);
                    setTimeout(() => { setDisplay("none") }, 250);

                }}
            >

                <Input       
                    required={true}  //se asegura que se introduzca un nombre //
                    type="text"
                    placeholder=" Ingresa tu nombre de jugador "
                    name="nombreJugador"
                    minLength={4}    // debe tener como minimo una cantidad de 4 caracteres //
                />
                <BotonDefault type="submit">  Confirmar  </BotonDefault>

            </form>
        </IngreName>
    </>
    )
}

export default IngresarNombre;   // se exporta componente para ser renderizado en el componente Juego//