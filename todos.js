function loadTodos() {
    renderTodos();
}

let todos = [{title: "test", date: "2020-11-06"}];


// function renderTodos() {
//     const todoContainer = document.getElementById('todo-container')
//     todoContainer.innerHTML = "";

//     for (const todo of todoState) {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = todo.title;
//         listItem.addEventListener('click', function () {
//             tar bort en todo när man klickar på todon 
//             const index = todoState.indexOf(todo);
//             todoState.splice(index, 1);
//             renderTodos();
//             updateCalenderWithTodoInfo();
//         })
//         todoContainer.append(listItem);
//         console.log(todoState)
//     }
// }

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
    renderCalendar();
    // console.log(todos);
}


function renderTodos() {
    const todoContainer = document.getElementById('list-content')
    todoContainer.innerHTML = "";

    for (const todoItem of todos) {
        const listItem = document.createElement('li');
        listItem.innerHTML = todoItem.title;
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        //   const editPen = document.createElement('i')
        //   const deleteTodoX = document.createElement('i')


        listItem.addEventListener('click', function () {
            // tar bort en todo när man klickar på todon 
            const index = todos.indexOf(todoItem);
            todos.splice(index, 1);
            renderTodos();
            updateCalenderWithTodoInfo();
        })
        //   todoContainer.append(checkbox, listItem, editPen, deleteTodoX); 
        todoContainer.append(checkbox, listItem);
    }
}

