import styled from "styled-components"     // importo la libreria para dar formato al componente //
import icono from "./icono.jpg"              // importo la imagen que voy a usar de icono para mi juego //

//aplico estilos //
const Encabe = styled.div`  
    background-color:rgb(6, 68, 39);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: xx-large;
    border: 5px solid rgb(0, 0, 0);
    height: 250px;
    font-weight: bolder;
    color: white;
    display: flex;
    justify-content: center;   
`

//aplico estilos //
const Icono = styled.img` 
    margin-top : 50px;
    height: 75px;
    width: 75px;
    animation: spin 5s linear infinite;
@keyframes spin {
    from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`

function Encabezado() {  /*componente que devuelve el titulo del juego con un icono "animado" */
    return <>
        <Encabe >            
            <h1>PIEDRA PAPEL O TIJERA! <Icono src={icono} alt='icono del juego'></Icono></h1>  
        </Encabe>
    </>
}

export default Encabezado;