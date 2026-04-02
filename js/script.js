const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const remainingTasks = document.getElementById("remainingTasks");
const emptyMessage = document.getElementById("emptyMessage");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const dingSound = document.getElementById("dingSound");
const filterButtons = document.querySelectorAll(".filter-btn");

// data

let tasks = [];
let currentFilter = "all";

// local storge 

function saveTasks() {
    localStorage.setItem("taskBloomTasks", JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem("taskBloomTasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

// event listeners

addBtn.addEventListener("click", addTask);

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        currentFilter = this.dataset.filer;
        updateActiveFilterButton();
        renderTasks();
    });
}

// add tasks 

function addTask() {
    const taskText = todoInput.value.trim();

    if (taskText === "") {
        alert("Please type a task before adding.");
        return;
    }

    const taskObject = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(taskObject);
    todoInput.value = "";

    saveTasks();
    renderTasks();
}

// get filtered tasks

function getFilteredTasks() {
    let filteredTasks = [];

    if (currentFilter === "all") {
        filteredTasks = tasks;
    } else if (currentFilter === "active") {
        filteredTasks = tasks.filter(function (task) {
            return !task.completed;
        });
    } else if (currentFilter === "completed") {
        filteredTasks = tasks.filter(function (task) {
            return task.completed;
        });
    }

    return filteredTasks;
}