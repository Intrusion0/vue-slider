// VUE SLIDER

/*
--DONE  1. Cro la nuova istanza Vue => new Vue();
--DONE  2. Faccio il collegamento con l'html tramite id => el: 'x';
--DONE  3. Creo la proprietà data => data: {};
    --DONE  3.1 All'interno creo una variabile contatore => counter = 0;
    --DONE  3.2 Infine inserisco la base dati che conterrà le varie info => slides
    : [{a: '', b: '', c: ''}];
--DONE  4. Creo la proprietà methods => methods: {}
    --DONE  4.1 All'interno creo 2 funzioni che riguardo i 2 pulsanti (prev - next); => nextThumb(); - prevThumb();
    --DONE  4.2 Creo la condizione per il pulsante next => if (counter < lunghezza array - 1)
        --DONE  4.2.1 Se è vero il contatore verrà incrementato => counter++;
        --DONE  4.2.2 Se è falso verrà assegnato il valore 0 al contatore, così riparte dalla prima slides.
    --DONE  4.3 Creo la condizione per il pulsante prev => if (counter === 0);
        --DONE  4.3.1 Se è vero assegno l'ultimo elemento dell'array contatore.
        --DONE  4.3.2 Se è falso il contatore verrà decrementato => counter--;
*/

var carousel = new Vue({
    el: '#myCarousel',
    data: {
        counterSlides: 0,
        slides: [
            {
                image: 'img/bmw-01.jpg',
                title: 'Bmw m4',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                image: 'img/bmw-02.jpg',
                title: 'Bmw m4 - Sport',
                text: 'Lorem ipsum.'
            },
            {
                image: 'img/bmw-03.jpg',
                title: 'Bmw m4 Power - orange',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                image: 'img/bmw-04.jpg',
                title: 'Bmw m4 - motore',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            },
            {
                image: 'img/bmw-05.jpg',
                title: 'Bmw m4 - interni',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.'
            }
        ]
    },
    methods: {
        nextThumb() {
            if (this.counterSlides < this.slides.length - 1) {
                this.counterSlides++;
            } else {
                this.counterSlides = 0;
            }
        },
        prevThumb() {
            if (this.counterSlides === 0) {
                this.counterSlides = this.slides.length - 1;
            } else {
                this.counterSlides--;
            }
        }
    }
});