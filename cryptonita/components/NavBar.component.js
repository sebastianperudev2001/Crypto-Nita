import { navegar } from "../dao/metodos"

const Navegador=()=>{
    const butOnClick=(event)=>{
        const link=event.target.id
        navegar(link)
    }
    return <div className="navegador mt-2 mb-2">
        <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
                <button id="/" type="button" className="nav-link" onClick={butOnClick} >Home</button>
            </li>
            <li className="nav-item">
                <button id="/inicioClientes" type="button" className="nav-link" onClick={butOnClick} >Clientes</button>
            </li>
            <li className="nav-item">
                <button id="/" type="button" className="nav-link" onClick={butOnClick} >Tipo de cambio</button>
            </li>
            <li className="nav-item">
                <button id="/" type="button" className="nav-link" onClick={butOnClick} >Operaciones</button>
            </li>
        </ul>
    </div>
}
export default Navegador