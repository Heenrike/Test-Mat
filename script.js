// JavaScript
const req = document.querySelector(".req");
const numero1 = document.querySelector(".numero1");
const numero2 = document.querySelector(".numero2");
const opcao1 = document.querySelector("#opçao1");
const opcao2 = document.querySelector("#opçao2");
const opcao3 = document.querySelector("#opçao3");
const all = document.querySelector(".all");
let numb1, numb2;

let g1;
let g2;
let g3;
req.addEventListener("click", ()=>{
  let Acertos = document.querySelector(".numbAcertos");
  let erros = document.querySelector(".numbErros");
  erros.innerHTML = "";

  Acertos.innerHTML = "";
} )

req.addEventListener("click", gerarPergunta);

function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarPergunta() {

  numero1.innerText = "0";
  numero2.innerText = "0";
  opcao1.innerText = "0";
  opcao2.innerText = "0";
  opcao3.innerText = "0";

  numb1 = gerarNumero(10, 80);
  numb2 = gerarNumero(10, 80);
  const resposta = numb1 + numb2;
  numero1.innerHTML = numb1;
  numero2.innerHTML = numb2;

  const randomOption = gerarNumero(1, 3);

  function opcaoAleatorio() {
    if (randomOption === 1) {
      opcao1.innerHTML = resposta;
    } else if (randomOption === 2) {
      opcao2.innerHTML = resposta;
    } else if (randomOption === 3) {
      opcao3.innerHTML = resposta;
    }
  }

  opcaoAleatorio();

  do {
    g1 = gerarNumero(1, 9);
    g2 = gerarNumero(1, 9);
    g3 = gerarNumero(1, 9);
  } while (
    (g1 === g2) |
    (g1 === g3) |
    (g2 === g1) |
    (g2 === g3) |
    (g3 === g1) |
    (g3 === g2)
  );

  function modificarResposta() {
    if (opcao1.innerText === "0") {
      opcao1.innerHTML = resposta + g1;
    }
    if (opcao2.innerText === "0") {
      opcao2.innerHTML = resposta + g2;
    }
    if (opcao3.innerText === "0") {
      opcao3.innerHTML = resposta + g3;
    }
  }

  modificarResposta();
}

function resp() {
  document.addEventListener("click", (e) => {
    const el = e.target;
    const opcao = el.innerText;
    console.log(g1, g2, g3);
    if (el.classList.contains("alternativas")) {
      if (opcao === (numb1 + numb2).toString()) {
        acertou(el);

        setTimeout(() => {
          gerarPergunta();
          resetarCores();
        }, 200);
        contadorAcertos();
      } else {
        errou(el);
        contadorErros();
      }
      setTimeout(() => {
        resetarCores(el);
      }, 200);
      setTimeout(() => {
        delStyles();
      }, 200);
    }
  });
}
resp();

function acertou(el) {
  el.classList.add("green");
  all.classList.add("acert");
}

function errou(el) {
  el.classList.add("red");
  all.classList.add("error");
}

function delStyles() {
  all.classList.remove("acert");
  all.classList.remove("error");
}
function resetarCores(el) {
  el.classList.remove("green");
  el.classList.remove("red");
}
gerarPergunta();

function contadorErros() {
  let erros = document.querySelector(".numbErros");
  let errosAtual = Number(erros.innerText);
  erros.innerText = errosAtual + 1;
}

function contadorAcertos() {
  let Acertos = document.querySelector(".numbAcertos");
  let Atual = Number(Acertos.innerText);
  Acertos.innerText = Atual + 1;
}
