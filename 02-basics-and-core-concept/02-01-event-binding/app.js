// document.querySelector('button').addEventListener(); //vanilla javascript way

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount('#events');
