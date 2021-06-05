// header video start

let videoBox = document.querySelector('.video__box');
let videoBtn = document.querySelector('.header__video');
let videoPlayer = document.querySelector('.video__src');
let videoArrow = document.querySelector('.video__arrow');

let srcVideo = 'video/Sequence.mp4';

videoBtn.addEventListener('click', () => {
    videoBox.classList.add('active');
    videoPlayer.setAttribute('src', srcVideo);
})

videoArrow.addEventListener('click', () => {
    videoBox.classList.remove('active');
})


// header video end

// header hiden-nav start

let hidenBtn = document.querySelector('.header__hiden');
let hiderBtn = document.querySelector('.header__hider');
let HidenNav = document.querySelector('.header__hiden-nav');

hidenBtn.addEventListener('click', () => {
    HidenNav.classList.add('active');
    hidenBtn.style.display = 'none';
    hiderBtn.classList.add('active');
})

hiderBtn.addEventListener('click', () => {
    HidenNav.classList.remove('active');
    hiderBtn.classList.remove('active');
    hidenBtn.style.display = 'block';
})

// header hiden-nav end

// body progress-bar start

class MyProgress {
    constructor(config) {
        this.progressList = document.querySelector(config.el);

        window.addEventListener('scroll', () => {
            if (pageYOffset >= 1000) {
                this.progressList.classList.add('active');
            }
        })
    }
}

const myProgerss = new MyProgress({
    el: '.about__list'
})

// body progress-bar end

// comments slider start

class Myslider {
    constructor(config) {
        this.commentBox = document.querySelector(config.el);
        this.commentCards = this.commentBox.querySelectorAll('.comment__cards');
        this.commentIndicators = this.commentBox.querySelectorAll('.comment__indicator');

        for (let i = 0; i < this.commentCards.length; i++) {
            
            
        }
    }
}

const mySlider = new MySlider({
    el: '.comment__box'
})

// comments slider end