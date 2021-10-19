var covid = require("./covid")
var axios = require("axios")
var qs = require("querystring")

var controlador = {}

//inserir no banco - METODO POST:
controlador.inserir = function(req,res){
				covid.create({
                        data_notificacao: req.body.data_notificacao,
                        data_primeiros_sintomas: req.body.data_primeiros_sintomas,
                        data_teste: req.body.data_teste,
                        data_obito: req.body.data_obito,
                        data_nascimento: req.body.data_nascimento,
                        faixa_idade: req.body.faixa_idade,
                        sexo: req.body.sexo,
                        raca: req.body.raca,
                        bairro: req.body.bairro,
                        municipio_residencia: req.body.municipio_residencia,
                        centro_saude: req.body.centro_saude,
                        tipo_teste: req.body.tipo_teste,
                        dor_garganta: req.body.dor_garganta,
                        dispneia: req.body.dispneia,
                        febre: req.body.febre,
                        tosse: req.body.tosse,
                        obito: req.body.obito,
                        internado_uti: req.body.internado_uti,
				}).then(
								function(dados){
												res.status(200).redirect("/covid")
								}
				).catch(
								function(erro){
												res.status(500).send("Ocorreu um erro ao inserir a informação no servidor: " + erro)
								}
				)
}

//buscar no banco - 1 (BUSCA ÚNICA):
controlador.buscarUm = function(req,res){
				covid.findOne({
								raw: true,
								where: {
												id: req.params.id
								}
				}).then(
								function (dados){
												res.status(200).send(dados)
								}
				).catch(
								function (erro){
												res.status(500).send("Ocorreu um erro na busca pelo arquivo: " + erro)
								}
				)
}

//buscar no banco - 2 (BUSCA GERAL):
controlador.buscarVarios = function (req,res){
    covid.findAll({
        raw: true
    }).then(
        function(dados){
            res.render("tabela",{
                covid: dados,
                pessoa: "Cleber"
            }
            )
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao buscar por arquivo: "+erro)
        }
    )
}

//atualizar um registro no banco - MÉTODO PUT:
controlador.atualizar = function (req,res){
				covid.update({
					            nome: req.body.nome,
								cpf: req.body.cpf,
								sexo: req.body.sexo,
								qtd_materias: req.body.qtd_materias
				},{
								where:{
												id: req.params.id
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
    covid.destroy({
        where:{
            id: req.params.id
        }
    }).then(
        function(dados){
            res.sendStatus(200)
        }
    ).catch(
        function(erro){
            res.status(500).send("Erro ao remover um arquivo: "+erro)
        }
    )
}

//handlebars:
controlador.novoFormulario = function(req,res){
    res.render("novoForm")
}

controlador.editarFormulario = function(req,res){
    res.render("editarForm",{
        id: req.params.id
    })
}

controlador.montarReqEdicao = function(req, res) {
    axios.put("/covid/" + req.params.id,
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
            res.status(200).redirect("/covid")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao editar o arquivo: " + err);
        })
}

controlador.montarReqDelete = function (req, res) {
    axios.delete('/covid/' + req.params.id,{
        proxy:{
            host: "localhost",
            port: 8085
        }
    }).then(function () {
            res.status(200).redirect("/covid")
        })
        .catch(function (err) {
            res.status(500).send("Erro ao apagar um arquivo: " + err);
        })
}

module.exports = controlador
