const {DataTypes} = require('sequelize')
const {sequelize} = require('../config/database/database')

const RepairModel = sequelize.define('Repairs',{
    //Se define los atributos en la entidad
    id:{
        primaryKey:true,
        autoIncrement: true,
        type:DataTypes.INTEGER,
        allowNull:false
    },
    date:{
        type:DataTypes.DATE,
        allowNull : true
    },
    status:{
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        defaultValue:'pending',
        allowNull:false,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:true
    }
})
module.exports = RepairModel;