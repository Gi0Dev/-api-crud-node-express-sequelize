const sequelize = require('../sequelize');
const {DataTypes} = require('sequelize');

//modelo da tabela do banco de dados que será criada 
const Produto = sequelize.define('produtos', {

    nome: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },

    descricao: 
    {
        type: DataTypes.TEXT,
        allowNull: false
    },

    preco:
    {
        type: DataTypes.DOUBLE,
        allowNull: false
    }

})
module.exports = Produto;