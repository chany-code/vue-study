const app = Vue.createApp({
  data() {
    return {
      keydownText: "",
      secondKeydownText: "",
      enteredText: "",
    };
  },
  methods: {
    showAlert() {
      alert("Pomeranian is coming!");
    },
    setKeydownText(event) {
      this.keydownText = event.target.value;
    },
    setSecondKeydownText(event) {
      this.secondKeydownText = event.target.value;
    },
    setEnteredText() {
      this.enteredText = this.secondKeydownText;
    },
  },
});

app.mount("#assignment");
