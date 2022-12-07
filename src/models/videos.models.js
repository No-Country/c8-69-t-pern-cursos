const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const Courses = require('./courses.models.js')

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
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    courseId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'course_id',
        references: {
            key: 'id',
            model: Courses
        }
    }
}, {
    //? Evita que sequelize agregue las columnas de createdAt y updatedAt
    timestamps : false
})

module.exports = Video