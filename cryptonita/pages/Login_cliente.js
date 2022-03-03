import LoginCliente from "../components/logon_cliente.component";

export default function PaginaCambioTipo() {

    return <div className="mt-4">
        <h1 className="text-center">Bienvenido</h1>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md">
            <LoginCliente/>
            </div>
            <div className="col-md-4"></div>
        </div>
    </div>
}
