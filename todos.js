function loadTodos() {
    renderTodos();
}

let todos = [];

function addTodoListener() {
    document.getElementById('todoBtn').addEventListener('click', addTodo);
}


    function renderTodos() {
        const todoContainer = document.getElementById('todo-container')
        todoContainer.innerHTML = ""; 
    
        for(const todo of todoState) {
            const listItem = document.createElement('li'); 
            listItem.innerHTML = todo.title; 
            
    
            listItem.addEventListener('click', function(){
                // tar bort en todo när man klickar på todon 
                const index = todoState.indexOf(todo); 
                todoState.splice(index, 1); 
                renderTodos(); 
                renderCalendar(); 
                console.log(todoState); 
            })
            todoContainer.append(listItem); 
        }
    }
    todos.push(todo);
    document.querySelector('form').reset();
    renderTodos();
    updateCalenderWithTodoInfo();
    // console.log(todos);



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
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        //   const editPen = document.createElement('i')
        //   const deleteTodoX = document.createElement('i')

    function addTodoListener() {
        document.getElementById('todoBtn').addEventListener('click', addTodo);
      }
      
      let todos = [];
      
      const addTodo = (ev)=>{
          ev.preventDefault();
          let todo = {
              title: document.getElementById('title').value,
              date: document.getElementById('date').value
          }
          todos.push(todo);
          document.querySelector('form').reset();
          renderTodos();
          console.log(todo);
      }
      
      function loadTodos() {
          // hämta alla todos från LS 
              renderTodos(); 
          }
          
          
      function renderTodos() {
          const todoContainer = document.getElementById('list-content')
          todoContainer.innerHTML = ""; 
      
          for(const todoItem of todos) {
              const listItem = document.createElement('li'); 
              listItem.innerHTML = todoItem.title;
              const checkbox = document.createElement('input')
              checkbox.type = 'checkbox'
            //    const editPen = document.createElement('i')
            //    const deleteTodoX = document.createElement('i')

      
              listItem.addEventListener('click', function(){
                  // tar bort en todo när man klickar på todon 
                  const index = todos.indexOf(todoItem); 
                  todos.splice(index, 1); 
                  renderTodos(); 
              })
            //  todoContainer.append(checkbox, listItem, editPen, deleteTodoX); 
                todoContainer.append(checkbox, listItem); 
          }
      }




      // HUr många arrayer finns det med datumet xxx

        listItem.addEventListener('click', function () {
            // tar bort en todo när man klickar på todon 
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
            // updateCalenderWithTodoInfo();
        })
        listItem.append(trashButton);
        todoContainer.append(listItem);
    }
}

