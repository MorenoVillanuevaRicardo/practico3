import piedra from './piedra.png';                                  //importo las imagenes //
import papel from './papel.png';
import tijera from './tijera.png';
import styled from 'styled-components';           // importo la libreria para dar formato al componente //

//aplico estilos//
const GaleIma = styled.div`
    display :block;
    margin:auto;
`

//aplico estilos//
const TirIma = styled.div`
    display: flex;
    flex-direction: column;  
    margin: auto; 
`

//aplico estilos//
export const P1 = styled.p`
    text-align : center;
    color: beige ;
    margin: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-size: x-large;
    font-weight: bold;        
`

//aplico estilos//
const IMG = styled.img`
    margin: auto;
    display: block;
    height: 125px;
    width: 125px;
    transition: all 0.5s ease-in-out;
    &:hover {
    height: 135px;
    width: 135px;
    border: 5px double rgb(54, 171, 218);
    border-radius: 25px;
    }  
`
//aplico estilos//
const ButImg = styled.button`
    background-color : black;
    height: 175px;
    width: 175px;
    filter: opacity(1);
    &:disabled {
    background-color: rgb(213, 227, 231); 
    }
    &:hover{
    background-color: rgb(205, 205, 205) ;
    }   
`

function mostrar(parametro, eleJugador) {                       // funcion para que una vez elegida la opcion por el jugador, solo quede visible dicha opcion //
    if (eleJugador === "" || eleJugador === parametro) {
        return "block";
    } else
        return "none";
}

function TiraImagenes({ setEleJugador, eleJugador, ronda }) { //el componente renderiza 3 botones que contienen a las imagenes para que el jugador haga click sobre una de ellas para ser elegidas//
    return (<>
        <TirIma>
            {(ronda === 1 && eleJugador === "") &&
                <P1> Haga click sobre una de las imagenes para seleccionar su opcion</P1>} {/*si es la ronda 1 y el jugador aun no eligio, se muestra una breve instruccion */}
            <GaleIma>
                <ButImg disabled={eleJugador} style={{ display: mostrar("piedra", eleJugador) }} ><IMG onClick={() => { setEleJugador("piedra") }} src={piedra} alt='imagen de piedra'></IMG></ButImg>
                <ButImg disabled={eleJugador} style={{ display: mostrar("papel", eleJugador) }}><IMG onClick={() => { setEleJugador("papel") }} src={papel} alt='imagen de papel'  ></IMG></ButImg>
                <ButImg disabled={eleJugador} style={{ display: mostrar("tijera", eleJugador) }} ><IMG onClick={() => { setEleJugador("tijera") }} src={tijera} alt='imagen de tijera' ></IMG></ButImg>
            </GaleIma>
        </TirIma>
    </>)
}


export default TiraImagenes;