// creazione istana VUE
let app = new Vue({
    el: '#app',
    data:{
        // array oggetti cambio lingua
        languages:[
            {text:'english', value: 0},
            {text:'french', value: 1},
            {text: 'german', value: 2}
        ],
        // array bandiere lingua
        flagsLang:[
            './assets/img/en.png',
            './assets/img/fr.png',
            './assets/img/de.png',
        ],
        // counter per bandiere
        counter: 0,
        // array fontawsome banner
        iconsBanner: [
            'fas fa-ruler-combined',
            'far fa-life-ring',
            'fas fa-book',
            'fas fa-shopping-cart'
        ],
        dudeBanner: './assets/img/home-business-hero-avatar.png',
    },
    methods: {
    }
});