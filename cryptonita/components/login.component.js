import { Button } from "react-bootstrap"

const Login = () => {
    return <aside>
        <div className="card bg-secondary text-black bg-opacity-25">
            <div className="card-body">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        <h2>Cryptonita</h2>
                    </div>
                    <div className="col">

                    </div>
                </div>
                <h5>Iniciar Sesión</h5>
                <div className="input-group-sm mb-2">
                    <label for="" className="form-label">Correo</label>
                    <input type="email" placeholder="Email" className="form-control" />
                </div>
                <div className="input-group-sm mb-2">
                    <label for="" className="form-label">Contraseña</label>
                    <input type="password" placeholder="password" className="form-control" />
                </div>
                <div className="row mt-2 mb-2">
                    <div className="col">
                        <Button>Ingresar</Button>
                    </div>
                </div>
            </div>
        </div>
    </aside>
}
export default Login