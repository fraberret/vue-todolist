console.log('it works');

/*
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
*/

const { createApp } = Vue

createApp({
    data() {
        return {
            newTask: '',
            toDoList: [
                { text: "Fare la spesa", done: false },
                { text: "Studiare per l'esame", done: false },
                { text: "Fare una passeggiata", done: true }
            ]
        }
    },
    methods: {
        remove(index) {
            console.log(index);
            this.toDoList.splice(index, 1)
        },
        addTask() {
            console.log('ciao');

            if (this.newTask.length > 1) {
                this.toDoList.unshift({ text: this.newTask, done: false })
                this.newTask=''
            } else {
                alert('Inserisci la tua task')
            }

        },
        completed(index) {
            console.log(this.toDoList[index].done);
            if (this.toDoList[index].done === true) {
                this.toDoList[index].done = false
            } else {
                this.toDoList[index].done = true
            }
        }
    }
}).mount('#app')