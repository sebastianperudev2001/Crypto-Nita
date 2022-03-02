
const db = require("../sequelize/models")
const guardarTransaccion = async (tipoCambio, tipoOperacion, monto, idUsuario, numeroCuenta, numeroBilletera,estado, numeroTransaccion) => {
    const Transac = await db.Transaccion.create({
        hora: new Date().toISOString().slice(0, 19).replace('T', ' '),
        fecha: new Date(),
        tipoCambio: tipoCambio,
        tipoOperacion: tipoOperacion,
        monto: monto,
        idUsuario: idUsuario,
        estado:estado,
        numeroCuenta : numeroCuenta,
        numeroBilletera : numeroBilletera,
        numeroTransaccion : numeroTransaccion

    })
    return Transac

}
const obtenerTransaccion = async () => {
    const Transac = await db.Transaccion.findAll()
    return Transac

}

const TransaccionID = async (id) => {
    const Transac = await db.Transaccion.findOne({
        where: {
            id: id
        }
    })
    return Transac
}
const modificarTransaccion =async (transaccion) => {
    const Transac = await TransaccionID(transaccion.id)
    Transac.numeroCuenta = transaccion.numeroCuenta
    Transac.numeroTransaccion = transaccion.numeroTransaccion
    Transac.numeroBilletera = transaccion.numeroBilletera
    Transac.estado = transaccion.estado
    console.log(transaccion.numeroCuenta)
    await Transac.save()

}


export { guardarTransaccion, obtenerTransaccion, TransaccionID, modificarTransaccion }