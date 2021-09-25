const express = require('express');
const jogadores = require('./jogadores.json')

const app = express();
app.listen(9080)

app.get('/gerador', function(req, resp){
    const currentQueryString = req.query.filtro
    const temFiltro = function(){
        if(currentQueryString) {
            return true
        } else {
            return false
        } 
    }

    const jogador = {
        nome: jogadores.nome[parseInt(Math.random() * jogadores.nome.length)],
        sobrenome: jogadores.sobrenome[parseInt(Math.random() * jogadores.sobrenome.length)],
        idade: parseInt(Math.random() * (40 - 17) + 17),
        posicao: jogadores.posicao[parseInt(Math.random() * jogadores.posicao.length)],
        clube: jogadores.clube[parseInt(Math.random() * jogadores.clube.length)]
    }
    
    const resposta = jogador.nome 
    + " " + jogador.sobrenome 
    + " é um futibolista brasileiro de " 
    + jogador.idade 
    + " anos que atua como " 
    + jogador.posicao 
    + ". Atualmente defende o " 
    + jogador.clube

    resp.send(resposta)
})
