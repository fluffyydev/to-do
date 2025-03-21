var toDoList = document.getElementById("toDoList");
const enterElement = document.getElementById("enterItemElement");
var maxToDoLength = 10;

// Enter Element items
const enterBox = document.getElementById("createTaskButton");
const enterTask = document.getElementById("newTaskText");

enterBox.oninput = function() {
  
  const newListElement = document.createElement('li');

  toDoList.appendChild(newListElement);
  
}
