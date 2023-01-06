const taskInput = document.querySelector('.taskInput');
const submit = document.querySelector('.submit')
const list = document.querySelector('.list');
const deletebtn = document.querySelector('.remove');
const magicboxes = document.querySelectorAll('.one')
console.log(magicboxes);
submit.addEventListener('click', addTask);

deletebtn.addEventListener('click', deletetasks);

list.addEventListener('dragstart', () => {
    console.log('dragstart has been triggered')
})
list.addEventListener('dragend', () => {
    console.log('dragend has been triggered')
})

for (magicBox of magicboxes) {
    magicBox.addEventListener('dragover', (e) => {
        console.log('dragover has been triggered');
        e.preventDefault();
    })
    magicBox.addEventListener('dragenter', () => {
        console.log('dragenter has been triggered')
    })
    magicBox.addEventListener('dragleave', () => {
        console.log('dragleave has been triggered')
    })
    magicBox.addEventListener('drop', () => {
        console.log('drop has been triggered')
    })
}


function deletetasks(e) {
    let tasks = [];
    if (confirm('Delete all tasks')) {
        localStorage.setItem('tasks', JSON.stringify('tasks'));
        location.reload();
    }

}

function addTask(e) {
    e.preventDefault();
    if (taskInput.value) {
        console.log('true')
        const li = document.createElement('li');
        li.className = 'task-item';
        li.style.border = "1px solid black"
        li.style.margin = '10px';
        li.style.padding = '8px'
        li.draggable = 'true';
        li.textContent = taskInput.value;
        console.log(document.querySelector('.taskInput').value);
        list.appendChild(li);
        addTaskToLocalStorage(li.textContent);
        taskInput.value = '';
    }
    else {
        alert('Please Enter task')
    }


}

function addTaskToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function getTasks() {
    let task;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {

        const li = document.createElement('li');

        li.className = 'task-item';
        li.textContent = task;

        list.appendChild(li);
    });


}
getTasks();
