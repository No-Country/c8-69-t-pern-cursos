const Users = require('./users.models')
const Categories = require('./categories.models')
const Videos = require('./videos.models')
const Roles = require('./roles.models')
const Courses = require('./courses.models')


const initModels = () => {

    //*Curso - Usuarios
    //? Un curso pertenece a un Usuario
    Courses.belongsTo(Users)
    //? Un Ususario tiene muchos cursos
    Users.hasMany(Courses)

    //*Categorias - Cursos
    //? Un curso pertence a una catergoria
    Courses.belongsTo(Categories)
    //? Una categoria tiene muhcos cursos 
    Categories.hasMany(Courses)

    //*Videos - Cursos
    //? Un Video pertenece a un curso
    Videos.belongsTo(Courses)
    //? un curso tiene muchos videos
    Courses.hasMany(Videos)

    //*Roles - Usuarios
    //? Un pertenece a un rol
    Users.belongsTo(Roles)
    //? un rol puede tener muchos usuarios
    Roles.hasMany(Users)
}


module.exports = initModels