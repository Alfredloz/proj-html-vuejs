// creazione istana VUE
let app = new Vue({
    el: '#app',
    data:{
        languages:[
            {text:'english', value: 0},
            {text:'french', value: 1},
            {text: 'german', value: 2}
        ],
        flagsLang:[
            './assets/img/en.png',
            './assets/img/fr.png',
            './assets/img/de.png',
        ],
        counter: 0,
    },
    methods: {
    }
});