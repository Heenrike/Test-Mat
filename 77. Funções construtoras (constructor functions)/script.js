// function Pessoa(nome, sobrenome) {
//   this.nome = nome;
//   this.sobrenome = sobrenome;

//   this.metodo = () => {
//     console.log("Meu Nome é", this.nome, this.sobrenome);
//   };
// }
// let p1 = new Pessoa("Pedro", "Henrique");

// p1.metodo()
function meuChachoro(nome, idade){
    this.nome = nome
    this.idade = idade
    this.metodo = ()=>{
        console.log(nome, idade);
    }
}
let dog = new meuChachoro("Kat", "12")
dog.metodo()
