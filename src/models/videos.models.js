const db = require('../utils/database')
const {DataTypes} = require('sequelize')

const Video = db.define('video',{
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
})

module.exports = Video