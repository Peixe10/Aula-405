/*
A -  Os console.log(Nota: ...) foram criados para verificar se o código está reagindo aos casos apenas.

B - Abrir o CMD para executar e digitar:
    Criar novo nome e email: node script.js salvar Luis luis@uol
    Buscar email digitando nome: node script.js buscar Luis
    Escrever todos os nomes e emails: node script.js buscar-todos */

//1 -Para pegar os arquivos do pc
const fs = require("fs")

//2 - Pegar o texto do node e salvar em uma variável
const comando = process.argv[2];
const nome = process.argv[3];
const email = process.argv[4];

//4 - Cria-se uma variável para salvar os cadastros em objeto, pois NODE lê em um objeto.

let cadastros = {};

// 7 - Carrega o arquivos "cadastros.JSON (?) 

fs.readFile("cadastros.json", (err,dados) => {
    
    //8 - Corrigir erro: Caso não tenha um arquivo cadastro.json criado:
    if(!err){
        let dadosString = dados.toString(); // 5.1 Transforma em String para conseguir ler
        cadastros = JSON.parse(dadosString);
    }    
    
    // 3 - Tratando as respostas dadas aos inputs criou-se os Ifs e Else Ifs abaixo.
    if(comando === "salvar"){
        cadastros[nome] = email; //4.1 A ideia é tornar o nome a chave e o email da pessoa o elemento.
        
        const dadosGravacao = JSON.stringify(cadastros) //5 Converter cadastros de object para string para poder passar para o JSON e evitar o erro object:Object
        
        fs.writeFile("cadastros.json", dadosGravacao, (err) => { //6 - 
            if(err){
                console.log("Deu  ruim");
            }
            else{
                console.log("ARQUIVO GRAVADO")
            }
        });
        console.log("Nota: Comando SALVAR");
    }
    else if(comando === "buscar-todos"){
        console.log(cadastros)//4.3 Mostra todos os elementos registrados em cadastros.
        console.log("Nota: Comando foi BUSCAR TODOS");
    }
    else if(comando === "buscar"){
        console.log(cadastros[nome]); //4.2 Mostra email do nome registrado na chave (que é o nome buscado)
        console.log("Nota: Comando foi BUSCAR");
    }
    else{
        console.log("Nota: Digite um comando existente.")
    }    
    
});

