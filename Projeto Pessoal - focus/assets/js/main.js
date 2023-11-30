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


let lista = document.getElementById("list");
function adicionarTarefa(){
   let texto = document.getElementById("task_name").value;
   if(texto.length == 0){
    function valorInvalido(){
      let valorInvalidoTexto = "Não é possivel adicionar vazio";
      let li = document.createElement("li"); li.className = "itensLista";
      const elementoTexto = document.createTextNode(valorInvalidoTexto);
      li.appendChild(elementoTexto);
      lista.appendChild(li);
   }
   let time = setInterval(function(){
      valorInvalido()
    }, 1000)

    setTimeout(function(){
          clearInterval(time)
          limpar()
    }, 4000)}
    else{
   let itensLista = document.createElement("li"); itensLista.className = "itensLista";
   const textElement = document.createTextNode(texto);
   itensLista.appendChild(textElement);
   lista.appendChild(itensLista);
   CriarBotaoApagar(itensLista)
   salvarTarefas()
       }
   document.getElementById("task_name").value = "";
   
 } 

function CriarBotaoApagar(lista){
   const botaoApagar = document.createElement('button')
   botaoApagar.innerText = "Apagar";
   botaoApagar.setAttribute('class', 'botaoApagar');
   botaoApagar.setAttribute('title', 'clique para apagar task');
   lista.appendChild(botaoApagar)
   botaoApagar.addEventListener('click', function() { 
      const liPai = botaoApagar.parentElement;
      liPai.remove();});
}
function Apagartask(){
      lista.removeChild(lista.firstChild);
 }
function limpar() {
   let lista = document.getElementById("list");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }}

function PressEnter(event){
      if(event.key === 'Enter'){
        adicionarTarefa();
      }
}

function salvarTarefas(){
  const liTarefas = lista.querySelectorAll('li')
  console.log(liTarefas)
}

 