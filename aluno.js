var sequelize = require("sequelize")
var banco = require("./banco_de_dados")

var aluno = banco.define("aluno",{
    cpf: {
        type: sequelize.STRING(15),
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING(120),
        allowNull: false,
    },
    sexo: {
        type: sequelize.STRING(10),
        allowNull: false,
    },
    qtd_materias: {
        type: sequelize.STRING(2),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

//Esta parte faz a criação das tabelas no banco de dados, 
//comentada após a primeira utilização para não ficar reiniciando os dados.
//aluno.sync() 

module.exports = aluno