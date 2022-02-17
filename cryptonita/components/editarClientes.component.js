const EdClientes = () => {
    return <div className="row mt-4">
        <div className="card bg-secondary text-black bg-opacity-25">
            <div className="card-body">
                <div className="row me-2 ms-2 mt-4 mb-4">
                    <div className="col">
                        <div className="input-group-sm mb-2">
                            <label for="" className="form-label">Nombre</label>
                            <input type="input" className="form-control" />
                        </div>
                        <div className="input-group-sm mb-2">
                            <label for="" className="form-label">Apellidos</label>
                            <input type="input" className="form-control" />
                        </div>
                        <div className="input-group-sm mb-2">
                            <label for="" className="form-label">Correo</label>
                            <input type="email" placeholder="Email" className="form-control" />
                        </div>
                        <div className="input-group-sm mb-2">
                            <label for="" className="form-label">Teléfono</label>
                            <input type="input" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group-sm mb-2">
                            <label for="" className="form-label">Estado</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Elige una Estado</option>
                                <option value="1">Pendiente</option>
                                <option value="2">Validado</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}
export default EdClientes