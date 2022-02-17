import { navegar } from "../dao/metodos"

const Navegador=(props)=>{
    const butOnClick=(event)=>{
        const link=event.target.id
        navegar(link)
    }
    return <div className="navegador mt-2 mb-2">
        <ul className="nav nav-tabs nav-fill">
            <li className="nav-item">
                <button id="/homeAdmin" type="button" className={props.lisClass[0]} onClick={butOnClick} >Home</button>
            </li>
            <li className="nav-item">
                <button id="/inicioClientes" type="button" className={props.lisClass[1]} onClick={butOnClick} >Clientes</button>
            </li>
            <li className="nav-item">
                <button id="/cambio_tipo" type="button" className={props.lisClass[2]} onClick={butOnClick} >Tipo de cambio</button>
            </li>
            <li className="nav-item">
                <button id="/editarAdminOp" type="button" className={props.lisClass[3]} onClick={butOnClick} >Operaciones</button>
            </li>
        </ul>
    </div>
}
export default Navegador