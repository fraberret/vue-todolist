console.log('it works');

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'hello word'
    }
  }
}).mount('#app')