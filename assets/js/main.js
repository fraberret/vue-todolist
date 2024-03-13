console.log('it works');

/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
*/

const { createApp } = Vue

createApp({
  data() {
    return {
      toDoList: [
        { text: "Fare la spesa", done: false },
        { text: "Studiare per l'esame", done: false },
        { text: "Fare una passeggiata", done: true }
    ]
    }
  }
}).mount('#app')