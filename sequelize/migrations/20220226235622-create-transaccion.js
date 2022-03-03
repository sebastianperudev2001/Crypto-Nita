'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transaccion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hora: {
        type: Sequelize.TIME
      },
      fecha: {
        type: Sequelize.DATE
      },
      tipoCambio: {
        type: Sequelize.FLOAT
      },
      tipoOperacion: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.FLOAT
      },
      idUsuario:{
        allowNull:false,
        type:Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaccion');
  }
};