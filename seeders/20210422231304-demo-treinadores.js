'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Treinadores', [
      {
        nome:'Ramon',
        idade: 27,
        nivel: 13,
        pokemon_preferido:'Girafig',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Pedro',
        idade: 25,
        nivel: 12,
        pokemon_preferido:'Sneasel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Gustavo',
        idade: 57,
        nivel: 20,
        pokemon_preferido:'Hitmontop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Robert',
        idade: 42,
        nivel: 60,
        pokemon_preferido:'Miltank',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Geovana',
        idade: 18,
        nivel: 1,
        pokemon_preferido:'Celebi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Ricardo',
        idade: 27,
        nivel: 17,
        pokemon_preferido:'Beatifly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'João',
        idade: 22,
        nivel: 999,
        pokemon_preferido:'Swellow',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Maria',
        idade: 29,
        nivel: 15,
        pokemon_preferido:'Zigzagoon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Roberta',
        idade: 60,
        nivel: 10,
        pokemon_preferido:'Raikou',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome:'Maraísa',
        idade: 36,
        nivel: 10,
        pokemon_preferido:'Lugia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Treinadores', null, {})
  }
};
