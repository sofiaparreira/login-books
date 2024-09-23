const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('books_db', 'root','', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize