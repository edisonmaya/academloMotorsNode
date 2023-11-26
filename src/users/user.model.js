const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/database/database')

const UserModel = sequelize.define('Users', {
    //Se define los atributos en la entidad
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('client', 'employee'),
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('available', 'disabled'),
        defaultValue: 'available',
        allowNull: false,
    }
})
module.exports = UserModel;