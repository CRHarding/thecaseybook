'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Teams', [{
        name: "Math Club",
        cost: 150
      },
      {
        name: "Squash",
        cost: 15
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teams', null, {});
  }
};
