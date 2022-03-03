'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert("Transaccion", [{
      hora: new Date(),
      fecha: new Date(),
      tipoCambio: "1",
      tipoOperacion: "Cambio BTC-PEN",
      monto: "1",
      idUsuario: "1",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      hora: new Date(),
      fecha: new Date(),
      tipoCambio: "1",
      tipoOperacion: "Cambio PEN-BTC",
      monto: "1",
      idUsuario: "1",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
