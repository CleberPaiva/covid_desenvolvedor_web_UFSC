var sequelize = require("sequelize")
var banco = require("./banco_de_dados")

var covid = banco.define("covid",{
    idcovid_19: {
    type: sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
    },
    data_notificacao: {
    type: sequelize.STRING(15),
    allowNull: false,
    },
    data_primeiros_sintomas: {
    type: sequelize.STRING(15),
    allowNull: false,
    },
    data_teste: {
    type: sequelize.STRING(15),
    allowNull: false,
    },
    data_obito: {
    type: sequelize.STRING(15),
    allowNull: false,
    },
    data_nascimento: {
    type: sequelize.STRING(15),
    allowNull: false,
    },            
    faixa_idade: {
        type: sequelize.STRING(15),
        allowNull: false,
    },
    sexo: {
        type: sequelize.STRING(10),
        allowNull: false,
    },
    raca: {
        type: sequelize.STRING(15),
        allowNull: false,
    },
    bairro: {
        type: sequelize.STRING(100),
        allowNull: false,
    }, 
    municipio_residencia: {
        type: sequelize.STRING(100),
        allowNull: false,
    },  
    centro_saude: {
        type: sequelize.STRING(80),
       allowNull: false,
    },  
    tipo_teste: {
        type: sequelize.STRING(30),
        allowNull: false,
    },  
    dor_garganta: {
        type: sequelize.STRING(4),
        allowNull: false,
    }, 
    dispneia: {
        type: sequelize.STRING(4),
        allowNull: false,
    }, 
    febre: {
        type: sequelize.STRING(4),
        allowNull: false,
    }, 
    tosse: {
        type: sequelize.STRING(4),
        allowNull: false,
    }, 
    obito: {
        type: sequelize.STRING(4),
        allowNull: false,
    },                                        
    internado_uti: {
        type: sequelize.STRING(4),
        allowNull: false,
    }
},{
    freezeTableName: true,
    timestamps: false
})

//Esta parte faz a criação das tabelas no banco de dados, 
//comentada após a primeira utilização para não ficar reiniciando os dados.
//covid.sync() 

module.exports = covid