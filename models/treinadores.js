'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treinadores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Treinadores.init({
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    nivel: DataTypes.INTEGER,
    pokemon_preferido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Treinadores',
  });
  return Treinadores;
};