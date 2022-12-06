const db = require('../utils/database')
const {DataTypes} = require('sequelize')
const Users = require('./users.models')
const Categories = require('./categories.models')




const Courses = db.define('courses', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING, //varchar 
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    //? Llave foranea de Users
    userId:{
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        defaultValue: "6f3308b6-38cd-4c67-9036-b87b9b07719f",
        
    },
    //userId: {
    //    type: DataTypes.UUID,
    //    allowNull: true,
    //    field: 'user_id',
    //    references: {
    //        key: 'id',
    //        model: Users
    //    },
   // },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'category_id',
        references: {
            key: 'id',
            model: Categories
        }
    }

})


module.exports = Courses
