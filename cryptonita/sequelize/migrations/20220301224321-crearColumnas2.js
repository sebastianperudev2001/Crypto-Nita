'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn("Transaccion","numeroTransaccion",{
      type: Sequelize.INTEGER,
      allowNull : true
    })
    await queryInterface.addColumn("Transaccion","numeroBilletera",{
      type: Sequelize.INTEGER,
      allowNull : true
    })
    await queryInterface.addColumn("Transaccion","numeroCuenta",{
      type: Sequelize.INTEGER,
      allowNull : true
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeColumn("Transaccion","numeroTransaccion")
     await queryInterface.removeColumn("Transaccion","numeroBilletera")
     await queryInterface.removeColumn("Transaccion","numeroCuenta")
  }
};