function addNewTask() {
  var list = window.document.getElementById("list");
  var text = window.document.getElementById("task_name").value;
  var listitens = document.createElement("li");
listitens.className = "textosListas"


  const textElement = document.createTextNode(text);
  listitens.appendChild(textElement);
  list.appendChild(listitens);
}