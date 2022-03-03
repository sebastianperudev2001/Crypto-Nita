const db = require("../sequelize/models")
const { Op } = require("sequelize");
const obtenerFiltro = async (datos) => {
    const cliente = await db.Usuario.findAll({
        where: {
            [Op.or]: [
                {
                    nombre: { [Op.like]: datos.nombre + '%' }
                },{
                    correo: { [Op.like]: datos.correo + '%' }
                },{
                    apellido: { [Op.like]: datos.apellido + '%' }
                }
            ],
            [Op.and]:[
                {
                    estado: { [Op.or]: ["Validado", "Pendiente"] }
                }
            ]
        },
        order: [
            ['id', 'ASC']
        ]
    });
    return cliente
}
const obtenerClientes = async () => {
    const cliente = await db.Usuario.findAll({
        where: {
            estado: { [Op.or]: ["Validado", "Pendiente"] }
            //estado: null
        },
        order: [
            ['id', 'ASC']
        ]
    });
    return cliente
}
const obtenerCliente = async (id) => {
    // Query por un proyecto de determinado id
    const usuario = await db.Usuario.findOne({
        where : {
            id : id
        }
    })
    return usuario
}
const modificarCliente= async (cliente)=>{
    const clienteAModificar = await obtenerCliente(cliente.id)
    
    clienteAModificar.nombre =cliente.nombre
    clienteAModificar.apellido= cliente.apellido
    clienteAModificar.correo = cliente.correo
    clienteAModificar.telefono = cliente.telefono
    clienteAModificar.estado = cliente.estado
    // Actualizamos proyecto en la bd
    await clienteAModificar.save()
}
export {obtenerClientes, obtenerCliente, modificarCliente, obtenerFiltro}