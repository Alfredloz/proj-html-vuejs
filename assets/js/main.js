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
        // counter array
        counterArray: 0,
        // countervideo
        counterVideo: null,
        // array fontawsome banner
        iconsBanner: [
            'fas fa-ruler-combined',
            'far fa-life-ring',
            'fas fa-book',
            'fas fa-shopping-cart'
        ],
        dudeBanner: './assets/img/home-business-hero-avatar.png',
        // hover
        hover: null,
        servicesArray:[
           page1=[
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
           ],
           page2=[
            {
                img:'./assets/img/home-business-service-slide-02-480x298.jpg',
                title: 'consultative training2',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae autem hic reiciendis quas animi!',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',
            },
            {
                img:'./assets/img/home-business-service-slide-03-480x298.jpg',
                title: 'real deal coaching2',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae ',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',


            },
            {
                img:'./assets/img/home-business-service-slide-01-480x298.jpg',
                title: 'advisor training program2',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae autem hic reiciendis',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',
            }
           ],
           page3=[
            {
                img:'./assets/img/home-business-service-slide-03-480x298.jpg',
                title: 'consultative training3',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae autem hic reiciendis quas animi!',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',
            },
            {
                img:'./assets/img/home-business-service-slide-01-480x298.jpg',
                title: 'real deal coaching3',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae ',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',


            },
            {
                img:'./assets/img/home-business-service-slide-02-480x298.jpg',
                title: 'advisor training program3',
                description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt molestiae autem hic reiciendis',
                clickInfo:'discover now',
                iconClass: 'fas fa-long-arrow-alt-right',
            }
           ],
                     
        ],
        coursesArray:[
            {
                bgCard: './assets/img/course-02-443x600.jpg',
                price: '$40',
                cents: ',00',
                lessons: '20',
                iconLesson: 'far fa-file-alt',
                students: '50',
                icoStudents: 'far fa-user',
                title:'Learing to Write as a Professional author',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus consectetur nemo officia repellendus quidem? Exercitationem aperiam eligendi quae.'
            },
            {
                bgCard: './assets/img/stock-full-hd-03-443x600.jpg',
                price: 'Free',
                cents: '',
                lessons: '10',
                iconLesson: 'far fa-file-alt',
                students: '20',
                icoStudents: 'far fa-user',
                title:'Customer-centric-info-tech Strategies',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus consectetur nemo officia repellendus quidem? Exercitationem aperiam eligendi quae.'
            },
            {
                bgCard: './assets/img/stock-full-hd-04-443x600.jpg',
                price: '$19',
                cents: ',00',
                lessons: '15',
                iconLesson: 'far fa-file-alt',
                students: '15',
                icoStudents: 'far fa-user',
                title:'Open Programming Courses for Everyone: Python',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus consectetur nemo officia repellendus quidem? Exercitationem aperiam eligendi quae.'
            },
            {
                bgCard: './assets/img/stock-full-hd-06-443x600.jpg',
                price: '$26',
                cents: ',00',
                lessons: '20',
                iconLesson: 'far fa-file-alt',
                students: '25',
                icoStudents: 'far fa-user',
                title:'Academic Listening and Note-taking',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic modi ducimus consectetur nemo officia repellendus quidem? Exercitationem aperiam eligendi quae.'
            }
        ],
        videoTexts:[
             {
                 arrowUp: 'fas fa-chevron-circle-up',
                 arrowDown: 'fas fa-chevron-circle-down',
                 title: 'How can We help?',
                 description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque expedita deleniti consectetur sapiente odit assumenda quo laboriosam nihil deserunt.'
             },{
                arrowUp: 'fas fa-chevron-circle-up',
                arrowDown: 'fas fa-chevron-circle-down',
                title: 'How can We help?2',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque expedita deleniti consectetur sapiente odit assumenda quo laboriosam nihil deserunt.'
            },
            {
                arrowUp: 'fas fa-chevron-circle-up',
                arrowDown: 'fas fa-chevron-circle-down',
                title: 'How can We help?3',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eaque expedita deleniti consectetur sapiente odit assumenda quo laboriosam nihil deserunt.'
            }     
        ],
        eventsDate:[
            {
                city:'Texas, US',
                typeOfEvent: 'Storytelling Workshop',
                day:'22',
                month:'nov'
            },
            {
                city:'Berlin, Germany',
                typeOfEvent: 'Storytelling Workshop2',
                day:'24',
                month:'nov'
            },
            {
                city:'Milan, Italy',
                typeOfEvent: 'Storytelling Workshop3',
                day:'25',
                month:'nov'
            },
            {
                city:'Madrid, Spain',
                typeOfEvent: 'Storytelling Workshop4',
                day:'26',
                month:'nov'
            },
            {
                city:'Paris, France',
                typeOfEvent: 'Storytelling Workshop5',
                day:'30',
                month:'nov'
            },
            {
                city:'New York, US',
                typeOfEvent: 'Storytelling Workshop6',
                day:'2',
                month:'dec'
            },
        ]
    },
    methods: {
        changePage(index){
            this.counterArray = index;
        },
        hoverItem(index){
            this.hover= index;
        }
    }
});