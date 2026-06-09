let list = document.getElementById("list");

function addTask() {
  let task = document.getElementById("task").value;

  if (task === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);

  document.getElementById("task").value = "";

  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", list.innerHTML);
}

function showTasks() {
  list.innerHTML = localStorage.getItem("tasks");
}

showTasks();
