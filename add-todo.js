const modal = document.getElementById("add-todo-modal");
const btn = document.getElementById("addBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function addTodo() {
  const listItem = document.createElement('li'); 
  const inputValue = document.getElementById('inputTodo').value; 
  let inputText = document.createTextNode(inputValue); 
  listItem.append(inputText)

  document.getElementById("todo-container").append(listItem);

 console.log('test')

}
submit.onclick = function() {
  document.getElementById('inputTodo').value = "";
}

