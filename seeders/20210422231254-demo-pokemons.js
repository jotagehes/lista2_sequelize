'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pokemons', [
      {
        nome: 'Girafarig',
        numero: 203,
        tipo:'Psychic',
        geracao: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sneasel',
        numero: 215,
        tipo:'Ice',
        geracao:5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Hitmontop',
        numero: 237,
        tipo:'Fighting',
        geracao:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Miltank',
        numero: 241,
        tipo:'Normal',
        geracao: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Celebi',
        numero: 251,
        tipo:'Grass',
        geracao: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Beautifly',
        numero: 267,
        tipo:'Bug',
        geracao:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Swellow',
        numero: 277,
        tipo:'Flying',
        geracao:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Zigzagoon',
        numero: 263,
        tipo:'Normal',
        geracao:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Raikou',
        numero: 243,
        tipo:'Eletric',
        geracao:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Lugia',
        numero: 249,
        tipo:'Psychic',
        geracao:4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pokemons', null, {})
  }
};
