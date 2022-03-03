'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.hasMany(models.Transaccion, {
        foreignKey: 'idUsuario',
      });
    }
  }
  Usuario.init(
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      dni: DataTypes.INTEGER,
      correo: DataTypes.STRING,
      password: DataTypes.STRING,
      telefono: DataTypes.INTEGER,
      estado: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Usuario',
      freezeTableName: true,
    }
  );
  return Usuario;
};
