const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 11121220;
let timer;

function timerSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    });
}

function iniciarRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = timerSegundos(segundos);
    }, 1000);
}


iniciar.addEventListener("click", function(event){
    clearInterval(timer);
    iniciarRelogio();
});

pausar.addEventListener("click", function(event){
    clearInterval(timer);
});

zerar.addEventListener("click", function(event){
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = timerSegundos(segundos);
});
