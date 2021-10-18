var aluno = require("./aluno")
var axios = require("axios")
var qs = require("querystring")

var controlador = {}

//inserir no banco - METODO POST:
controlador.inserir = function(req,res){
				aluno.create({
								nome: req.body.nome,
								cpf: req.body.cpf,
								sexo: req.body.sexo,
								qtd_materias: req.body.qtd_materias
				}).then(
								function(dados){
												res.status(200).redirect("/aluno")
								}
				).catch(
								function(erro){
												res.status(500).send("Ocorreu um erro ao inserir a informação no servidor: " + erro)
								}
				)
}

//buscar no banco - 1 (BUSCA ÚNICA):
controlador.buscarUm = function(req,res){
				aluno.findOne({
								raw: true,
								where: {
												cpfaluno: req.params.cpf
								}
				}).then(
								function (dados){
												res.status(200).send(dados)
								}
				).catch(
								function (erro){
												res.status(500).send("Ocorreu um erro na busca pelo aluno: " + erro)
								}
				)
}

//buscar no banco - 2 (BUSCA GERAL):
controlador.buscarVarios = function (req,res){
    aluno.findAll({
        raw: true
    }).then(
        function(dados){
            res.render("tabela",{
                aluno: dados,
                pessoa: "Cleber"
            }
            )
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por aluno: "+erro)
        }
    )
}

//atualizar um registro no banco - MÉTODO PUT:
controlador.atualizar = function (req,res){
				aluno.update({
					            nome: req.body.nome,
								cpf: req.body.cpf,
								sexo: req.body.sexo,
								qtd_materias: req.body.qtd_materias
				},{
								where:{
												cpf: req.params.cpf
								}
				}).then(
								function (dados){
												res.status(200).send(dados)
								}
				).catch(
								function (erro){
												res.status(500).send("Ocorreu um erro ao atualizar um dado no servidor: " + erro)
								}
				)
}

//remover registro do banco - MÉTODO DELETE:
controlador.remover = function(req,res){
    aluno.destroy({
        where:{
            cpf: req.params.cpf
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover um aluno: "+erro)
        }
    )
}

//handlebars:
controlador.novoFormulario = function(req,res){
    res.render("novoForm")
}

controlador.editarFormulario = function(req,res){
    res.render("editarForm",{
        cpf: req.params.cpf
    })
}

controlador.montarReqEdicao = function(req, res) {
    axios.put("/aluno/" + req.params.cpf,
        qs.stringify({
            nome: req.body.nome,
            cpf: req.body.cpf,
            sexo: req.body.sexo,
            qtd_materias: req.body.qtd_materias
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            proxy:{
                host: "localhost",
                port: 8085
            }
        }
    ).then(function () {
            res.status(200).redirect("/aluno")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao editar o aluno: " + err);
        })
}

controlador.montarReqDelete = function (req, res) {
    axios.delete('/aluno/' + req.params.cpf,{
        proxy:{
            host: "localhost",
            port: 8085
        }
    }).then(function () {
            res.status(200).redirect("/aluno")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar um aluno: " + err);
        })
}

module.exports = controlador
