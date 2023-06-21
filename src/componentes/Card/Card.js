import {BoxPaginaPrincipal} from './Card.jsx'
function Card(props){

    return(
        <BoxPaginaPrincipal  className={props.estilizacao} onClick={props.reproduz}>
                    <img src={props.imagem} alt=""></img>
                    <h4>{props.titulo}</h4>
         </BoxPaginaPrincipal>
    )
}

export default Card