// function updateCalenderWithTodoInfo() {
//     const times = document.querySelectorAll('time');

//     for (const time of times) {
//         console.log(time.dateTime);
//         let count = 0;
//         for (let todo of todos) {
//         }   
//     //    if (todo.date === time.dateTime) {
//      
//          console.log('todo found for date!');
//            time.count++;
//                 if (count >= 0) {
//                     time.append(" - " + count);
//                 }
//              }
//     // }
//     }


function updateCalenderWithTodoInfo() {
    const times = document.querySelectorAll('time');
     console.log(times);
     console.log(todos);
    
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
            let span = document.createElement('span');
            if (span < 0)
            span.textContent = count;
            time.appendChild(span);
        } else if (count <= 0) {
            span.remove();
        }

    }
}

// time.innerHTML = "<span>" + times + count + "</span>";

// let span = document.createElement("span");
// let node = document.createTextNode(count);
// span.appendChild(node);
//if
//var element = document.getElementById('hej');
//        element.appendChild(span);


//document.querySelectorAll('span').innerHTML = "<span>" + count + "</span>";

// function renderCalendar() {
//     //javascript-kalender 
// }

    
    // Loopa igenom times (loop)
        // Kolla om datumet sparat i time matchar något datum i todos listan (loop)
        // Om det matchar då lägg till en siffra på time elementet.

// 


//const span = document.createElement('span');
//span.innerHTML = 2;

function renderCalendar () {

}







// const calendar = document.querySelector("#app-calendar");

// for (let day = 1; day <= 30; day++) {

//     calendar.insertAdjacentHTML("beforeend", '<div class="day">${day}</div>');
// }




function updateCalenderWithTodoInfo() {
    const times = document.querySelectorAll('time');
       
    console.log(todos)
    for (const time of times) {

        console.log(time.dateTime);
        let count = 0;

        for (const todo of todos) {

        }

        if (count >= 0) {
            time.append(" - " + count);
        } 
    }
}
