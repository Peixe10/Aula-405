//1 -Para pegar os arquivos do pc
const fs = require("fs")

//2 - Pegar o texto do node e salvar em uma variável
const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];

//4 - Cria-se uma variável para salvar os cadastros em objeto, pois NODE lê em um objeto.

const cadastros = {};

// 3 - Tratando as respostas dadas aos inputs criou-se os Ifs abaixo.
if(comando === "salvar"){
    
    console.log("Comando SALVAR");
}
else if(comando === "buscar-todos"){
    console.log("Comando foi BUSCAR TODOS");
}
else if(comando === "buscar"){
    console.log("Comando foi BUSCAR");
}
else{
    console.log("Digite um comando existente.")
}