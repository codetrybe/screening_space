const todoInput = document.getElementById('todo_input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo_list');

//add a task

//create a task
//Delete tasks
//Cross out tasks
//Event Listeners
//Example tasks

const addTask = () => {
    const taskText = todoInput.nodeValue.trim();

    if (taskText !== '')
    {
        const taskItem = createTaskItem(taskText);
    }
}

const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li');
    taskItem.className = "todo-item";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    document.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    taskItem.appendChild(checkbox)
    taskItem.appendChild(taskTextSpan)
    taskItem.appendChild()

    return
}