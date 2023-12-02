
function addNewTask(taskInput) {
let list = document.getElementById("list");
let textoCriado =  document.getElementById("task_name").value;
let li = document.createElement("li"); li.className = "textosListas"
  const textElement = document.createTextNode(textoCriado);
  li.appendChild(textElement);
  CriarBotaoApagar(li)
  list.appendChild(li);
  salvarTarefas();
  document.getElementById("task_name").value = "";
}
function PressEnter(event){
  if(event.key === 'Enter'){
    addNewTask()();
  }}

function CriarBotaoApagar(li){
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "apagar";
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'apagar esta tarefa');
  li.appendChild(botaoApagar);
  botaoApagar.addEventListener('click', function() {
    const liPai = botaoApagar.parentElement;
    liPai.remove()
    salvarTarefas()
    ;});
}

function salvarTarefas(){
  const liTarefas = list.querySelectorAll('li')
  const listaDeTarefas = []

  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', "").trim();
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas) 
  // converteu o array para um json de string para salvar no 
  // mini datacenter do navegador
  localStorage.setItem('tarefas', tarefasJSON) 
  // salva no armazenamento do navegador e atribui o nome tarefas
  // para ser convertido novamente em array
  // local storage so pode armazenar string(por isso a converção)
  // stringif converte array em string do tipo json
}
function carregarTarefasSalvas(){
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas);
  // parse converte em objeto javascript
  for(let tarefa of listaDeTarefas){
    console.log(tarefa)
  }
}
carregarTarefasSalvas()
