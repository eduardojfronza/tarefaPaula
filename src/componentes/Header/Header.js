import { Cabecalho } from "./Header.jsx"
function Header() {

    return (
        <Cabecalho>
            <h1>Video</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"></input>
        </Cabecalho>
    )
}

export default Header