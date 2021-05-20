'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: "CRHarding",
        email: "c@c.com",
        password: "casey123",
        aboutMe: "Lorem ipsum dolor sit amet dolor lorem sit amet.",
        img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/06/24/Pictures/_dabbc3d4-b5de-11ea-b3b3-7b919605787e.jpg"      
      }
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
