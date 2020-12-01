 let count = ""
let numberOfTodos = document.createElement("p");
let renderNumberOfTodos = document.createTextNode(count);
numberOfTodos.appendChild(renderNumberOfTodos);

let element = document.getElementById('time-div');
element.appendChild(numberOfTodos);



function updateCalenderWithTodoInfo() {
    const times = document.querySelectorAll('time');
    // console.log(times);
    // console.log(todos);

    for (let time of times) {
        let count = 0;
        for (let todo of todos) {
            console.log(todo.date + ' - ' + time.dateTime);
            if (todo.date === time.dateTime) {
                console.log('todo found for date!');
                count++;
            }
        }
        if (count > 0) {
            //Om span inte finns så lägg till span 
            if (time.querySelector('span')) {
                time.querySelector('span').textContent = count;
            } 

            else {
            let span = document.createElement('span');
            span.textContent = count;
            time.appendChild(span);
            }
        }
        else if (time.querySelector('span')) {
            time.querySelector('span').remove();       
        }


}
}

// function getNumberOfDays(year, month) {
//     let numDays = new Date(year, month + 1, 0).getDate()
//     return numDays;
// }
