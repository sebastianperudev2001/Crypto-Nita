const db = require("../sequelize/models");
const Transaccion = db.Transaccion

const guardarTransaccionInicial = async(cambio,operacion,monto,idusuario) =>{
    const aux = new Date()
    const hora = aux.getHours()+":"+aux.getMinutes()+":"+aux.getSeconds()
    const estado = "Pendiente"
    const a = await Transaccion.create({
        hora: hora,
        fecha: aux,
        tipoCambio: cambio,
        tipoOperacion: operacion,
        monto: monto,
        estado:estado,
        idUsuario: idusuario,
        
        
    })
    return a
}

const obtenerTransacciones = async () =>{
    const transacciones = await Transaccion.findAll({
        order:[
            ["id","desc"]
        ]
    })

    return transacciones
}

const obtenerTransaccionUnica = async (id) =>{
    const transaccion = await Transaccion.findOne({
        where:{
            id:id
        }
    })

    return transaccion
}

const modificarTransaccionEstado = async (id,estado) =>{
    const transaccionMod = await obtenerTransaccionUnica(id)
    transaccionMod.estado = estado
    await transaccionMod.save()
}

const obtenerUsuarioUnico = (id) =>{
    const usuario = db.Usuario.findOne({
        where:{
            id:id
        }
    })

    return usuario
}


export {guardarTransaccionInicial,obtenerTransacciones,modificarTransaccionEstado,obtenerUsuarioUnico}