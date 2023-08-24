const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pet_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);

module.exports = Pet;
