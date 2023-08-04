const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");
const estilos = getComputedStyle(document.body);
let backgroundColor = estilos.backgroundColor;


for (let i of ps) {
    console.log(i);
    i.style.backgroundColor = backgroundColor;
    i.style.color = "white"
}
