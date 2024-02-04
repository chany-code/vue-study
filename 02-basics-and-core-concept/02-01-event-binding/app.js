// document.querySelector('button').addEventListener(); //vanilla javascript way

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter++;
      // this.counter = this.counter + 1;
    },
    reduce(){
      this.counter--;
    }
  }
});

app.mount('#events');
