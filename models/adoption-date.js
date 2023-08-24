const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AdoptionDate extends Model {}

AdoptionDate.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        adoption_center_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pet_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        available_from: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'adoption_date',
    }
);

module.exports = AdoptionDate;
