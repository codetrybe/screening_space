const todoInput = document.getElementById('todo_input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo_list');

//add a task

//create a task
//Delete tasks
//Cross out tasks
//Event Listeners
//Example tasks

//function to create a task 
const addTask = () => {
    const taskText = todoInput.value.trim();

    if (taskText !== '')
    {
        const taskItem = createTaskItem(taskText);
        todoList.appendChild(taskItem);
        todoInput.value = '';
        //resets the input value after adding adding it to the list item
    }
}
// 
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
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);

    taskItem.appendChild(checkbox)
    taskItem.appendChild(taskTextSpan)
    taskItem.appendChild(deleteBtn)

    return taskItem;
};

const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
};

const toggleTask = (event) => {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed');
};

addTaskButton.addEventListener('click', addTask);
todoInput.addEventListener('keydown', function (event) {
    if(event.key === 'Enter'){
        addTask();
    }
});

//initial tasks
const initialTasks = ['Finish Resume', 'Write Cover letter', 'Optimize Linkedin'];

initialTasks.forEach((task) => {
    const taskItem = createTaskItem(task);
    todoList.appendChild(taskItem);
});