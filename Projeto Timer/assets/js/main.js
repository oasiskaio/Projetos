function retornaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
     hour12: false,
     timeZone: 'UTC'
    }); }
 
 let relogio = document.querySelector(".relogio");
 let segundos = 0 
 let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
       segundos++;
       relogio.innerHTML = retornaSegundos(segundos)
    }, 1000)}


 function iniciar() {
    clearInterval(timer) 
    iniciaRelogio()
    relogio.classList.remove('pausado')
 }
 function pausar(){
    clearInterval(timer)
    relogio.classList.add('pausado')
}
 function zerar(){
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
    relogio.classList.remove("pausado")
    segundos = 0
 }



 