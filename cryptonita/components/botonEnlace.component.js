import { navegar } from "../dao/metodos"

const ButtonLink=(props)=>{
    const butOnClick=()=>{
        const link=props.path
        navegar(link)
    }
    return <button id="" className={props.color} onClick={butOnClick} >{props.nombre}</button>
}
export default ButtonLink