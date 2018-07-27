//PARA EXECUTAR, ABRE O CMD E DIGITA
//node index.js (obs: precisa estar dentro da pasta do arquivo)
//no navegador localhost:3000/segundaparte

// 1 - Padrão para buscar arquivos 
const express = require("express");
const bodyParser = require('body-parser'); //Biblioteca que vem junto com o express
const app = express();

/*app.get('/',(req,res) => {
    res.send("Seja bem vindo ao PC do Luis")});*/

//POR padrão não deixa como está acima, já que o json entende string:

//ESTÁ INCOMPLETO, PEGAR NO GIT DA AULA O ARQUIVO COMPLETO - PASTA CHAMA PASTAS

app.get('/',(req,res) => {
    res.send({
        mensagem:"Seja bem vindo ao PC do Luis"
    })
   });

app.get("/segundaparte",(req,res) => {
    res.send("Acabou a pasta! PC do Luis");
});

//O seu programa ouve conexões na porta 3000 para que ele ossa reagir a essas conexões.
app.listen(3000,() => console.log("Servidor inicializado"));