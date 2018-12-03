const addTaskForm = document.querySelector('form');
const addTaskInput = document.querySelector('.addTask');
let taskNumber = document.querySelector('.taskNumber');
const listTask = document.querySelector('.listTask');
// const listTaskElements = document.querySelectorAll('li.task');
const search = document.querySelector('.search');
const toDoList = [];



const remove = (e) => {

    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    taskNumber.textContent = toDoList.length;
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    const newTask = addTaskInput.value;
    if (!newTask) return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = `${newTask} <button>Usun</button>`;

    toDoList.push(task);
    renderList();

    listTask.appendChild(task);

    addTaskInput.value = '';

    taskNumber.textContent = toDoList.length;
    task.querySelector('button').addEventListener('click', remove);
}

const renderList = () => {
    listTask.textContent = '';
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        listTask.appendChild(toDoElement);
    });
}



const searchTask = (e) => {
    let search = e.target.value.toLowerCase();
    let tasks = [...toDoList];

    tasks = tasks.filter(task =>
        task.textContent.toLowerCase().includes(search));
    console.log(tasks);
    listTask.textContent = '';

    tasks.forEach(task => {
        listTask.appendChild(task);
        console.log(toDoList);
    });
};

addTaskForm.addEventListener('submit', addTask);
search.addEventListener('input', searchTask);