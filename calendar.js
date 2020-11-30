// function updateCalenderWithTodoInfo() {
//     const times = document.querySelectorAll('time');
//      console.log(times);
//      console.log(todos);
    
//     for (let time of times) {
//         let count = 0;
//         for (let todo of todos) {
//             console.log(todo.date + ' - ' + time.dateTime);
//             if (todo.date === time.dateTime) {
                
//                 console.log('todo found for date!');

//                 count++;
                
//             }
//         }
//         if (count > 0) {
//             time.append(" - " + count);
//         }
//         // console.log(time.dateTime);
   
//     }
// }

//get the number of days in a month 

let yearChosen = new Date().getFullYear();
let monthChosen = new Date().getMonth();
let months = [
    'Januari',
    'Februari',
    'Mars',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'Augusti',
    'September',
    'Oktober',
    'November',
    'December'
];


function getNumberOfDays(year, month) {
    let numDays = new Date(year, month + 1, 0).getDate()
    return numDays;

}


function renderCal(getNumDays) {
    let yearPTag = document.getElementById('year');
    yearPTag.innerText = yearChosen; 
    let monthName = months[monthChosen];
    let monthPTag = document.getElementById('month');
    monthPTag.innerText = monthName;

    for (let i = 1; i <= getNumDays; i++) {
        let dayPTag = document.createElement('p');
        dayPTag.style.fontSize = '1.3rem';
        let dayText = document.createTextNode(i.toString());
        dayPTag.appendChild(dayText);
        let date = monthName + " " + i.toString() + ", " + yearChosen;
        let dayOfWeek = new Date(date).getDay();
        document.getElementById(dayOfWeek.toString()).appendChild(dayPTag);

        console.log(date);
                count++;
            }
        }

        if (count > 0) {
            time.innerHTML = "<span>" + count + "</span>";
        }
    }
}
renderCal(getNumberOfDays(yearChosen, monthChosen));

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

