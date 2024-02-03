const app = Vue.createApp({
    data() {    // 항상 객체를 반환. Vue가 제어하는 어느 HTML에서든 사용 가능한 값들을 return
        return {
            courseGoalA: 'I love Pomeranian',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        }; 
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');