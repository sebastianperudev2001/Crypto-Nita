const HistorialHandle = (req, res) => {
    if (req.method == "GET") {
        const operaciones = [
            { id: 10, FechaHora: "01/01/22-12:00:00", Tipo: "Venta", TipoCamio: "BTC-PEN", Monto: 200 },
            { id: 20, FechaHora: "02/01/22-12:00:00", Tipo: "Compra", TipoCamio: "PEN-BTC", Monto: 1000 },
            { id: 30, FechaHora: "03/01/22-12:00:00", Tipo: "Venta", TipoCamio: "PEN-BTC", Monto: 300 }
        ]
        res.json({
            operaciones: operaciones,
            msg: ""
        })
    } else {
        res.status(400).jason({
            msg: "Error, metodo no disponible"
        })
    }
}
export default HistorialHandle