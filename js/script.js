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

