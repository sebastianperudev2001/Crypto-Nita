import { navegar } from "../dao/metodos"

const ButtonLink=(props)=>{
    const butOnClick=()=>{
        const link=props.path
        navegar(link)
    }
    if (props.modo=="admin"){
        return <button id="" className={props.color} onClick={props.editar} >{props.nombre}</button>
    }

    return <button id="" className={props.color} onClick={butOnClick} >{props.nombre}</button>
}
export default ButtonLink