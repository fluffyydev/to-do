var toDoList = document.getElementById('toDoList');
var enterElement = document.getElementById('enterItemElement');
//var maxToDoLength = 10;

var enterBox = document.getElementById('createTaskButton');

enterBox.onchange = function() {
  if (enterBox.checked == true) {

    enterBox.checked = false;
    const enterTask = document.getElementById('newTaskText');
    if (enterTask.value != "") {
      const newListElement = document.createElement('li');
      const taskTextNode = document.createTextNode(" " + enterTask.value.trim());
      const newCheckbox = document.createElement("input");
      newCheckbox.type = "checkbox"

      newListElement.appendChild(newCheckbox);
      newListElement.appendChild(taskTextNode);
      toDoList.insertBefore(newListElement, enterElement);

      enterTask.value = ""
    }
  }
}
