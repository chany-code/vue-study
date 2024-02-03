const app = Vue.createApp({
    data() {
        return {
            myName: 'Mr. Pomeranian',
            myAge : 8,
            myImageSrc : 'https://lh3.googleusercontent.com/proxy/dzfS8AkTZoTCPhdBUrNv9Cenpjx3H92HGl2ICJPr8gV_oJA5RDMfYuVx9dC_omuUpG23fPJ6DitgzRVarV8Cxdpq5g3vZbMO0xJAo82lRqqIO7cDPK37bDNHDHlZkF1c9Mt-CAcFaWOFH80AjuhOEw'
        }
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');