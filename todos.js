function loadTodos() {
    renderTodos();
}

let todos = [];

function addTodoListener() {
    document.getElementById('todoBtn').addEventListener('click', addTodo);
}


const addTodo = (ev) => {
    ev.preventDefault();
    let todo = {
        title: document.getElementById('title').value,
        date: document.getElementById('date').value
    }
    todos.push(todo);
    document.querySelector('form').reset();
    renderTodos();
    updateCalenderWithTodoInfo();
}


function renderTodos() {
    const todoContainer = document.getElementById('list-content');
    todoContainer.innerHTML = "";
    const updateCalenderWithTodoInfo = document.getElementById('time-div');

    for (const todoItem of todos) {
        // create todo item div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo-item-div"); // add class
        // todoDiv.appendChild(todoContainer);

        // create li
        const listItem = document.createElement('li');
        todoDiv.appendChild(listItem);
        listItem.innerHTML = todoItem.title;
        // create trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-button"); // add class
        todoDiv.appendChild(trashButton);

        // remove todo when click checkbox
        trashButton.addEventListener('click', function () {
            const index = todos.indexOf(todoItem);
            todos.splice(index, 1);
            renderTodos();
            //updateCalenderWithTodoInfo();
        })
        listItem.append(trashButton);
        todoContainer.append(listItem);
    }
}

