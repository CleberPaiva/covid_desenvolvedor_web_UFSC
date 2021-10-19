var express = require("express")
//const controlador = require("./covidControlador")
var covidControlador = require("./covidControlador")
var rotas = express.Router()

//rotas api
rotas.post("/covid/",covidControlador.inserir)
rotas.get("/covid/:id",covidControlador.buscarUm)
rotas.get("/covid",covidControlador.buscarVarios)
rotas.put("/covid/:id",covidControlador.atualizar)
rotas.delete("/covid/:id",covidControlador.remover)

//rotas das páginas:
rotas.get("/cadastrar",covidControlador.novoFormulario)
rotas.get("/editar/:id",covidControlador.editarFormulario)
rotas.get("/remover/:id",covidControlador.montarReqDelete)
rotas.post("/editarReq/:id",covidControlador.montarReqEdicao)


module.exports = rotas
