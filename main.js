window.addEventListener('load', main); 

/*
const todoState = [{
      title: 'Handla mat efter skolan', 
      date: new Date()

}, { 
      title: 'Äta maten', 
      date: new Date()

}, { 
      title: 'Sov',
      date: new Date()

}]
*/ 
function main(){
      loadToday();
      addTodo(); 
      startClock();
     // loadTodos();
}
  