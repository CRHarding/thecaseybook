'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Team.belongsToMany(models.User, {
        through: 'UserTeam',
        foreignKey: 'teamId',
        otherKey: 'userId'
      })
    }
  };
  Team.init({
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Team',
  });
  return Team;
};