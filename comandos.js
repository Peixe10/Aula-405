const fs = require('fs');

exports.salvar = function salvar(){
    // 2 - Se (! NÃO) tiver nome OU NAO tiver email emitir essa mensagem
    if(!nome || !email){
        console.log('Nome e email são obrigatórios, cacilda!');
        return;
    }

    cadastros[nome] = email;
    
    const dadosGravacao = JSON.stringify(cadastros);
    
    fs.writeFile('cadastros.json', dadosGravacao, (err) => {
        if(err){
            console.log('Deu ruim');
        }else{
            console.log('Gravei o arquivo');
        }
    });    
}

exports.buscarTodos = function buscarTodos(){
    console.log(cadastros);
}

exports.buscar = function buscar(){
    if(!cadastros[nome]){
        console.log('Num achei!');
    }else{
        console.log(cadastros[nome]);
    }
}