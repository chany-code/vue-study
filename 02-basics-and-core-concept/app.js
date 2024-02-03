const app = Vue.createApp({
    data() {    // 항상 객체를 반환. Vue가 제어하는 어느 HTML에서든 사용 가능한 값들을 return
        return {
            courseGoal: 'I love Pomeranian',
            vueLink: 'https://vuejs.org/'
        }; 
    }
});

app.mount('#user-goal');