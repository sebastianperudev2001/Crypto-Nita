import { useState } from "react";

const LoginCliente = () => {
    const [correoUsuario,setCorreoUsuario] = useState("")
    const [passUsuario,setPassUsuario] = useState("")

    const correoOC = (event) =>{
        setCorreoUsuario(event.target.value)
    }

    const passOC = (event) =>{
        setPassUsuario(event.target.value)
    }

    return <div className="card bg-light col mt-3">
        <div class="card-body">
            <h5>Iniciar sesión</h5>
            <form className="mt-3">
                <div className="mb-4">
                    <input type="email" className="form-control" id="email" placeholder="Correo Electrónico" onChange={correoOC} defaultValue={correoUsuario}/>
                </div>
                <div className="mt-4 mb-4">
                    <input type="password" className="form-control" id="pass" placeholder="Contraseña" onChange={passOC} defaultValue={passUsuario}/>
                </div>
                <div class="d-grid gap-2 mb-2">
                    <button class="btn btn-dark" type="button">Ingresar</button>
                </div>
                <a className="fw-light text-muted link-secondary" onClick={()=>{
                    location.href="/nosotros"
                }}>¿Olvidaste tu contraseña?</a>
            </form>
        </div>
    </div>
}

export default LoginCliente