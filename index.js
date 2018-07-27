/*Código resumido - feito pelo professor em aula
INCOMPLETO, ESSE INDEX NÃO FUNCIONA, BUSCAR NA AULA 405 EH*/

const fs = require('fs');
const comando = process.argv[2];
const comandos = require("./comandos") //Pegará as funções do arquivo comandos.js
const nome = process.argv[3];
const email = process.argv[4];

let cadastros = {};

//1 - Cria variável objeto para colocar as funções.

/*Anulado pela const comandos na linha 5

const comandos = {
    'salvar': salvar,
    'buscar': buscar,
    'buscar-todos': buscarTodos       
}*/

fs.readFile('cadastros.json',  (err, dados) => {
    if(!err){
        let dadosString = dados.toString();
        cadastros = JSON.parse(dadosString);
    }

    if(!comandos[comando]){
        console.log('Tá bebo! Esse comando não existe, pows!');
        return
    }

    comandos[comando]();
});