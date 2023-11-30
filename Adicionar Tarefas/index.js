function addNewTask() {
let text = window.document.getElementById("task_name").value;
let list = window.document.getElementById("list");
let li = document.createElement("li"); li.className = "textosListas"
  const textElement = document.createTextNode(text);
  li.appendChild(textElement);
  CriarBotaoApagar(li)
  list.appendChild(li);
  salvarTarefas();
  document.getElementById("task_name").value = "";
}
function PressEnter(event){
  if(event.key === 'Enter'){
    addNewTask()();
  }
}

function CriarBotaoApagar(li){
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "apagar";
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'apagar esta tarefa');
  li.appendChild(botaoApagar);
  botaoApagar.addEventListener('click', function() {
    const liPai = botaoApagar.parentElement;
    liPai.remove();});
}

function salvarTarefas(){
  const liTarefas = list.querySelectorAll('li')
  const listaDeTarefas = []

  for(let tarefa of liTarefas){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', "").trim();
    listaDeTarefas.push(tarefaTexto)
  }
  console.log(listaDeTarefas)
}
/* function limpaInput(){
    text.value = "";
    text.focus
} */
