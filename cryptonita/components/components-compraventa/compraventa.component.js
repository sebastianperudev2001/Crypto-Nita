import Link from "next/link";
import ModalCV from "./modalCompraVenta.component";
import { useState } from "react";
//En compra el monto esta en PEN(el usuario brinda soles)
//En venta el monto esta en BTC(el usuario brinda btc)
const CompraVenta = (props) => {
  const [estadoModal, setEstadoModal] = useState(false)
  const [tipoModal, setTipo] = useState("solicitar")

  const cerrarOC = () => {
    setEstadoModal(false)
  }

  const cambioOC = () => {
    if (props.tipo == "compra") {
      const recibir = document.getElementById("recibir_compra")
      const dar = document.getElementById("dar_compra")
      dar.value = recibir.value / props.penbtc
      return
    }


    if (props.tipo == "venta") {
      const recibir = document.getElementById("recibir_venta")
      const dar = document.getElementById("dar_venta")
      recibir.value = dar.value * props.btcpen
      return
    }
  };

  const pasarHistoria28 = async (id) => {
    if (id == null) return
    location.href = `/Historia28?id=${id}`
  }

  const pasarHistoria29 = async (id) => {
    if (id == null) return
    location.href = `/Historia29?id=${id}`
  }

  const confirmarOCCompra = async () => {
    const id = await auxsolicitarCompra()
    await pasarHistoria29(id)
    setEstadoModal(false)
  }

  const confirmarOCVenta = async () => {
    const id = await auxsolicitarVenta()
    await pasarHistoria28(id)
    setEstadoModal(false)
  }

  const solicitarOC = () => {
    var valor = null
    if (props.tipo == "venta") {
      valor = document.getElementById("dar_venta")
      console.log(valor.value)
    }

    if (props.tipo == "compra") {
      valor = document.getElementById("recibir_compra")
    }

    if (valor.value == 0) {
      setEstadoModal(true)
      setTipo("error")
      return
    }
    setEstadoModal(true)
    setTipo("solicitar")
  }

  const auxsolicitarCompra = async () => {
    const recibir = document.getElementById("recibir_compra")
    const monto = recibir.value / props.penbtc
    const response = await props.solicitar(props.penbtc, monto, 1)
    return response.id
  };

  const auxsolicitarVenta = async () =>{
    const dar = document.getElementById("dar_venta")
    const monto = dar.value
    const response = await props.solicitar(props.btcpen, monto, 1)
    return response.id
  }

  if (props.tipo == 'compra') {
    return (
      <div className="container-fluid">
        <form>
          <div className="mt-5-md">
            <div className="row">
              <div className="col-md-5 ms-5-md">
                <label htmlFor="recibir_compra" className="form-label">
                  Recibes (BTC):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recibir_compra"
                  placeholder="0"
                  defaultValue={0}
                />
              </div>
              <div className="col-md">
                <div className="d-flex justify-content-center pt-4">
                  <button type="button" className="btn btn-light" onClick={cambioOC}>
                    <img src="/flecha.png" className="imgflechas rounded mx-auto d-block"></img>
                  </button>
                </div>
              </div>
              <div className="col-md-5 me-5-md">
                <label htmlFor="dar_compra" className="form-label">
                  Das (PEN):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="dar_compra"
                  placeholder="0"
                  defaultValue={0}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-center">Cambio: {props.penbtc}</p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">

            <button
              className="btn btn-primary me-md-2"
              type="button"
              onClick={solicitarOC}>
              Solicitar
            </button>

            <Link href={"/"} passHref>
              <button className="btn btn-danger" type="button">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
        <ModalCV mostrar={estadoModal}
          cerrar={cerrarOC}
          tipo={tipoModal}
          confirmar={confirmarOCCompra}></ModalCV>
      </div>
    );
  }

  if (props.tipo == 'venta') {
    return (
      <div className="container-fluid">
        <form>
          <div className="mt-5-md">
            <div className="row">
              <div className="col-md-5 ms-5-md">
                <label htmlFor="dar_venta" className="form-label">
                  Das (BTC):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="dar_venta"
                  placeholder="0"
                  defaultValue={0}
                />
              </div>
              <div className="col-md">
                <div className="d-flex justify-content-center pt-4">
                  <button type="button" className="btn btn-light" onClick={cambioOC}>
                    <img src="/flecha.png" className="imgflechas rounded mx-auto d-block"></img>
                  </button>
                </div>
              </div>
              <div className="col-md-5 me-5-md">
                <label htmlFor="recibir_venta" className="form-label">
                  Recibes (PEN):
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="recibir_venta"
                  placeholder="0"
                  defaultValue={0}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-center">Cambio: {props.btcpen}</p>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button
              className="btn btn-primary me-md-2"
              type="button"
              onClick={solicitarOC}
            >
              Solicitar
            </button>
            <Link href={"/"} passHref>
              <button className="btn btn-danger" type="button">
                Cancelar
              </button>
            </Link>
          </div>
        </form>
        <ModalCV mostrar={estadoModal}
          cerrar={cerrarOC}
          tipo={tipoModal}
          confirmar={confirmarOCVenta}></ModalCV>
      </div>
    );
  }
};
export default CompraVenta;
