// creazione istana VUE
let app = new Vue({
    el: '#app',
    data:{
        // logo header
        logoHeader:'./assets/img/dark-logo.png',
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
        servicesArray:[
            {
                img:'./assets/img/home-business-service-slide-01-480x298.jpg',
                title: 'consultative training',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae autem hic reiciendis quas animi!',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',
            },
            {
                img:'./assets/img/home-business-service-slide-02-480x298.jpg',
                title: 'real deal coaching',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae ',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',


            },
            {
                img:'./assets/img/home-business-service-slide-03-480x298.jpg',
                title: 'advisor training program',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae autem hic reiciendis',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',
            }
        ]
    },
    methods: {
    }
});