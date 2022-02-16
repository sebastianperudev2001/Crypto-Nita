import LoginCliente from "../components/logon_cliente.component";

export default function PaginaCambioTipo() {

    return <div className="mt-4">
        <h1 className="text-center">Bienvenido</h1>
        <div className="row">
            <div className="col-2"></div>
            <LoginCliente/>
            <div className="col-2"></div>
        </div>
    </div>
}
