var toDoList = document.getElementById("toDoList");
const enterElement = document.getElementById("enterItemElement");
var maxToDoLength = 10;

const enterBox = document.getElementById("createTaskButton");


enterBox.onclick = function() {
  const enterTask = document.getElementById("newTaskText");

  const newListElement = document.createElement("li");
  const newCheckBox = document.createElement("input");
  newCheckBox.type = "checkbox";

  const taskTextNode = document.createTextNode(" " + enterTask.value.trim());

  newListElement.appendChild(newCheckBox);
  newListElement.appendChild(taskTextNode);

  toDoList.appendChild(newListElement);
   
}
