var sequelize = require("sequelize")

var conexao = new sequelize ("u883923978_alunos2021", "u883923978_cleberpaiva","Alunos2021",{
				host: "sql487.main-hosting.eu",
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