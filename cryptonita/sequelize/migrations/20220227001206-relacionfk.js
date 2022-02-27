'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("Transaccion",{
      fields:["idUsuario"],
      type:"FOREIGN KEY",
      name:"FK_TRANSACCION_USUARIO",
      references:{
        table:"Usuario",
        field:"id"
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint("Usuario","FK_TRANSACCION_USUARIO")
  }
};
