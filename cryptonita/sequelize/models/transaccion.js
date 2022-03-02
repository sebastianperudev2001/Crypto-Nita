'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaccion.belongsTo(models.Usuario,{
        foreignKey:"idUsuario"
      })
    }
  }
  Transaccion.init({
    hora: DataTypes.TIME,
    fecha: DataTypes.DATE,
    tipoCambio: DataTypes.FLOAT,
    tipoOperacion: DataTypes.STRING,
    monto: DataTypes.FLOAT,
    idUsuario:DataTypes.INTEGER,
    estado:DataTypes.STRING,
    numeroTransaccion:DataTypes.INTEGER,
    numeroBilletera:DataTypes.INTEGER,
    numeroCuenta:DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Transaccion',
    freezeTableName:true
  });
  return Transaccion;
};