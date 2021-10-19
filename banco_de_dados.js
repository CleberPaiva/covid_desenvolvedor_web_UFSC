var sequelize = require("sequelize")

var conexao = new sequelize ("u883923978_covid_ufsc", "u883923978_covid_ufsc","Covid2019",{
				host: "sql487.main-hosting.eu",
                //port: "3306",
				dialect: "mysql"
})


conexao.authenticate().then(
    function(){
        console.log("Conectado ao banco com sucesso!")
    }
).catch(
    function(erro){
        console.log("Erro ao conectar: "+erro)
    }
)

module.exports = conexao