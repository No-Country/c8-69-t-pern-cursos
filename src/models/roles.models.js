const db = require('../utils/database')
const {DataTypes} = require('sequelize')


const Roles = db.define('roles', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING, //varchar 
        allowNull: false
    }
}, {
    //? Evita que sequelize agregue las columnas de createdAt y updatedAt
    timestamps : false
})


module.exports = Roles
