/* Para pegar todas tag */  let paragrafos = document.getElementsByTagName("p")
for(let i = 0; i<paragrafos.length; ++i ){
    console.log(paragrafos[i].textContent)
}


/* Criar Elemnento */
let tag = document.createElement('div');
let h1 = document.createElement("h1");
let Texto =  document.createTextNode("Ola Mundo")
h1.appendChild(Texto);
tag.appendChild(h1);
document.body.appendChild(tag);



