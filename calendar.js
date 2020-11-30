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
    //loop 


    console.log(todos);
    for (const time of times) {
        
        console.log(time.dateTime);
        let count = 0;
        for (const todo of todos) {
           // Kolla om datum för todo matchar datum i kalender. 
           // Finns det en todo med ett datum som stämmer överens ska antalet 
           // todos för denna dag visas i kalender. 
        
           if (time.dateTime === todo.date) {
            // the count how many todo

            console.log(todo.date);
            const todosSpan = document.createElement('span')
            span.innerHTML = "";
           }
           

        }
        
        if (count > 0) {
            time.append("todosSpan" + count);
            break;
        }
    }

    // Lägger en till liten kommentare här. 
    //1. Vi får inte över todos från todos.js, behöver läggas i en egen variabel? 
    //   Rad 35 todos.js
    
    // Loopa igenom times (loop)
        // Kolla om datumet sparat i time matchar något datum i todos listan (loop)
        // Om det matchar då lägg till en siffra på time elementet.

// 
}
console.log(todos);

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
