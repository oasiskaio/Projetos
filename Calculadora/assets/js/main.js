function criaCalculadora(){
    return {
    display: document.querySelector(".display"),

       inicia(){
        // quando iniciar já chama o metodo cliqueBotoes
        // this é como se fosse calculadora.cliqueBotoes(chama o metodo de calculadora)
        this.cliqueBotoes();
        this.pressionaEnter();
    },
       // conta vai receber o valor que esta dentro de display
       // a função eval vai fazer a conta que esta dentro da variavel
       // tente fazer a conta, se o valor de conta n foi enviado de um alert
       // depois da função eval agir, display recebe o resultado como string
       // no tratamento de erro ira disparar um alert de conta invalida
       realizaConta(){
        let conta = this.display.value;
        try {
         conta = eval(conta)
         if(!conta){
            alert('Conta invalida');
            return;
        }
         this.display.value = String(conta)
        }catch(e){
        alert("conta invalida");
        return;
        }
    },
       // metodo para realizar a função dentro do input com a tecla enter
       pressionaEnter(){
        this.display.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.realizaConta()
            }
        })
    },
       // este metodo vai limpar o display
       clearDisplay(){
       this.display.value = ""
    },
        // o display vai recebe o valor de display menos o ultimo elemento
        apagaUm(){
       this.display.value = this.display.value.slice(0, -1);
    },
        // aqui o this é calculadora
        // mas depois de document que esta chamando a função, ele se torna o this
        // quando usamos arrow function o this se mantem sempre o mesmo
        //.bind(this) inves de usar o this document, use o calculadora
       cliqueBotoes(){
        document.addEventListener("click", (e) => {
          const el = e.target;
          if(el.classList.contains("btn-num")){
            this.btnParaDisplay(el.innerText);
          }

          if(el.classList.contains('btn-clear')){
            this.clearDisplay()
          }

          if(el.classList.contains('btn-del')){
            this.apagaUm();
          }

          if(el.classList.contains("btn-eq")){
              this.realizaConta()
          }
        })
    },
       btnParaDisplay(valor){
          this.display.value += valor
    }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia();