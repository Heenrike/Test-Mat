// argumentos  que sustenta todos  os argumentos enviados
 
function funcao(){
let total = 0
    for(let argumentos of arguments){
        total += argumentos
    }
    console.log(total)
}
funcao(1, 2, 3, 4, 5, 6, 7, 8, 4)