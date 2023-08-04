function criarCalculadora() {
  return {
    display: document.querySelector(".display"),

    inicia() {
      this.cliqueBotoes();
      this.display.focus();
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          const btn = el.innerText;
          this.display.focus();
          this.btnDisplay(btn);
        }
        if (el.classList.contains("btn-clear")) {
          this.clear();
        }
        if (el.classList.contains("btn-del")) {
          this.del();
        }
        if (el.classList.contains("btn-eq")) {
          this.realizarConta();
        }
      });
    },
    btnDisplay(btn) {
      this.display.value += btn;
    },
    clear() {
      this.display.value = " ";
    },
    del() {
      lengthValue = this.display.value.length;
      this.display.value = this.display.value.slice(0, -1);
    },
    realizarConta() {
      try {
        this.display.value = eval(this.display.value);
      } catch {
        this.display.value = "0";
        alert("Error");
      }
    },
  };
}
const calculadora = criarCalculadora();
calculadora.inicia();

