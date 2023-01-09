const submit = document.querySelector('.submit')

const deletebtn = document.querySelector('.remove');

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    if (e.target.id === "card-contents") {
        e.target.appendChild(document.getElementById(data));
    }

}

function deleteTask(event) {
    let del = event.currentTarget.parentNode.parentNode;
    del.removeChild(event.currentTarget.parentNode);
}
submit.addEventListener('click', addTask);
let count = 1;

function addTask(e) {
    e.preventDefault();
    var list = document.querySelector('.list');
    let taskDesc = document.querySelector("#taskdescription");
    let taskname = document.querySelector('.taskInput');

    if (taskname.value === "") {
        alert('enter a task')
        return;
    }

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.setAttribute("id", count);
    taskDiv.draggable = "true";
    taskDiv.ondragstart = drag;

    let taskHead = document.createElement("div");
    taskHead.classList.add("task-heading");

    taskHead.textContent = count + ".     " + taskname.value;
    taskname.value = "";
    count++;

    let taskBody = document.createElement("div");
    taskBody.classList.add("task-body");

    taskBody.textContent = taskDesc.value;
    taskDesc.value = "";

    let delbtn = document.createElement("button")
    delbtn.innerHTML = "Delete"
    delbtn.onclick = deleteTask;
    delbtn.classList.add("deletebutton");

    taskDiv.appendChild(taskHead);
    taskDiv.appendChild(taskBody);
    taskDiv.appendChild(delbtn)

    list.appendChild(taskDiv);


}