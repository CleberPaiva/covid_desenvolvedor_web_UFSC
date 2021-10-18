var express = require("express")
//const controlador = require("./alunoControlador")
var alunoControlador = require("./alunoControlador")
var rotas = express.Router()

//rotas api
rotas.post("/aluno/",alunoControlador.inserir)
rotas.get("/aluno/:cpf",alunoControlador.buscarUm)
rotas.get("/aluno",alunoControlador.buscarVarios)
rotas.put("/aluno/:cpf",alunoControlador.atualizar)
rotas.delete("/aluno/:cpf",alunoControlador.remover)

//rotas das páginas:
rotas.get("/cadastrar",alunoControlador.novoFormulario)
rotas.get("/editar/:cpf",alunoControlador.editarFormulario)
rotas.get("/remover/:cpf",alunoControlador.montarReqDelete)
rotas.post("/editarReq/:cpf",alunoControlador.montarReqEdicao)


module.exports = rotas
