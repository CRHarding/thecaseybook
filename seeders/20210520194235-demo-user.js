'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: "CRHarding",
      email: "c@c.com",
      password: "Casey123",
      aboutMe: "The lorem is the ipsum of dolor sit the amet.",
      img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/06/24/Pictures/_dabbc3d4-b5de-11ea-b3b3-7b919605787e.jpg"
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
