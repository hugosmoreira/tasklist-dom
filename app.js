const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // Add task event
  form.addEventListener("submit", addTask);

  // remove task event
  taskList.addEventListener("click", removeTask);
  // clear task event

  clearBtn.addEventListener("click", clearTasks);

  // filter tasks event

  filter.addEventListener("keyup", filterTasks);
}

// Add Task
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // criar um li element

  const li = document.createElement("li");
  // adiciionar classe

  li.className = "collection-item";

  // criar o text node e o append para o li

  li.appendChild(document.createTextNode(taskInput.value));

  // Create new link element

  const link = document.createElement("a");

  // adicionar classe
  link.className = "delete-item secondary-content";
  // add ico html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li

  li.appendChild(link);

  // Append the li to Ul

  taskList.appendChild(li);

  //clear input

  taskInput.value = "";

  e.preventDefault();
}

// Remove Task

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}

// clear tasks

function clearTasks() {
  taskList.innerHTML = "";
}

// filter tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
