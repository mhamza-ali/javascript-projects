const addBtn = document.querySelector("#add-btn")
const newTaskInput = document.querySelector(".wrapper input")
const tasksContainer = document.querySelector("#tasks")
const error = document.getElementById("error")
const countValue = document.querySelector("#count-value")
 
let taskCount = 0;

const displayCount = (taskCount) =>{
    countValue.innerHTML = taskCount;
}

