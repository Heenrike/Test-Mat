function returnFuncao(nome) {
    return function () {
         return nome;
    };
}

const funcao = returnFuncao("Pedro"); 
console.dir(funcao); 
