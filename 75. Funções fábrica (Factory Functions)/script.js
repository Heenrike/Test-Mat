function criarPessoa(name, idade, altura, peso){
return{
    nome:name,
    idade:idade,
    altura:altura,
    peso:peso,
  info: function(){
    let imc = peso / (altura ** 2);
    console.log(`Ola ${this.nome} Voce tem ${this.idade} e seu peso é ${this.peso} e a sua altura ${this.altura} e seu imc é ${imc.toFixed(2)}` )
  } 
}
}
const p1 = criarPessoa("Henrique", 35, 1.54, 60 )
  
const p2 = criarPessoa("Pedro", 15, 1.74, 80 )

const p3 = criarPessoa("Marcos", 12, 1.54, 91 )

p1.info()
p2.info()
p3.info()
