document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});

function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var taskList = document.getElementById("taskList");

    taskList.innerHTML = "";
    tasks.forEach(function(task) {
        var li = document.createElement("li");
        li.textContent = task;
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
            removeTask(task);
        });
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var task = taskInput.value.trim();
    if (task !== "") {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        loadTasks();
    }else{
        alert("Please Insert Your Task ..! ");
    }
}

function removeTask(task) {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    var index = tasks.indexOf(task);
    if (index !== -1) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}
