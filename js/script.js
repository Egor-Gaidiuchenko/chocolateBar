 // Burger

const burger = document.querySelector('.burger'),
      burgerMenu = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('hide');
    document.body.classList.toggle('lock');
});

// More about button

const moreAbout = document.querySelector('.more-about-wrapper'),
      aboutText = document.querySelectorAll('.about-content > p');

moreAbout.addEventListener('click', () => {
    moreAbout.classList.add('hide');
    aboutText.forEach((item) => {
        item.classList.toggle('hide');
    });
});

// Scroll

const nav = document.querySelector('.nav'),
      navItem = document.querySelectorAll('.nav-item'),
      scrollItem = document.querySelectorAll('.scroll-item'),
      burgerItem = document.querySelectorAll('.burger-nav-item'),
      header = document.querySelector('.header');

function pageScroll(i) {   
    window.scrollTo({
        top: scrollItem[i].offsetTop - header.clientHeight,
        left: 0,
        behavior: 'smooth'
    });
}

nav.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('nav-item')) {
        navItem.forEach((item, i) => {
            if (item == target) {
                pageScroll(i);
            }
        });
    }
});

burgerMenu.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('burger-nav-item')) {
        burgerItem.forEach((item, i) => {
            if (item == target) {
                burgerMenu.classList.toggle('hide');
                document.body.classList.toggle('lock');
                pageScroll(i);
            }
        });
    }
});

function navigationBehaviorByScroll() {
    navItem.forEach((item, i) => {
        if (window.scrollY >= (scrollItem[i].offsetTop - window.innerHeight / 2)) {
            navItem.forEach(i => {
                i.classList.remove('nav-item-checked');
            });
            navItem[i].classList.add('nav-item-checked');
        }
    });

    burgerItem.forEach((item, i) => {
        if (window.scrollY >= (scrollItem[i].offsetTop - window.innerHeight / 2)) {
            burgerItem.forEach(i => {
                i.classList.remove('burger-nav-item-checked');
            });
            burgerItem[i].classList.add('burger-nav-item-checked');
        }
    });
}

window.addEventListener('scroll', navigationBehaviorByScroll);

// header behavior in gaps

const mainGaps = document.querySelectorAll('.main-gap');

window.addEventListener('scroll', () => {
    mainGaps.forEach(i => {
        if (i.getBoundingClientRect().top < window.innerHeight && i.getBoundingClientRect().top > -window.innerHeight) {
            if (i.getBoundingClientRect().top < 50 && i.getBoundingClientRect().top > -200) {
                header.style.position = 'fixed';
            } else {
                header.style.position = 'absolute';
            }
        }  
    });
});

// slider

// const homeImg = document.querySelector('.home > img'),
//       sliderNext = document.querySelector('.slider-next'),
//       sliderPrevious = document.querySelector('.slider-previous'),
//       sliderNav = document.querySelectorAll('.slider-nav');

// let i = 0;

// fetch('http://localhost:3000/slider')
//     .then(data => data.json())
//     .then(res => homeImg.setAttribute('src', res[i]));

// sliderNav[i].classList.add('slider-active');

// function sliderNavigation () {
//     sliderNext.addEventListener('click', () => {
//         i = ++i;

//         fetch('http://localhost:3000/slider')
//             .then(data => data.json())
//             .then(res => {
//                 if (i < res.length) {
//                     homeImg.setAttribute('src', res[i]);
//                     sliderNav.forEach(i => {
//                         i.classList.remove('slider-active');
//                     });
//                     sliderNav[i].classList.add('slider-active');
//                 } else {
//                     i = 0;
//                     homeImg.setAttribute('src', res[i]);
//                     sliderNav.forEach(i => {
//                         i.classList.remove('slider-active');
//                     });
//                     sliderNav[i].classList.add('slider-active');
//                 }
//             });
//     });

//     sliderPrevious.addEventListener('click', () => {
//         i = --i;

//         fetch('http://localhost:3000/slider')
//             .then(data => data.json())
//             .then(res => {
//                 if (i < 0) {
//                     i = res.length - 1;

//                     homeImg.setAttribute('src', res[i]);
//                     sliderNav.forEach(i => {
//                         i.classList.remove('slider-active');
//                     });
//                     sliderNav[i].classList.add('slider-active');
//                 } else {
//                     homeImg.setAttribute('src', res[i]);
//                     sliderNav.forEach(i => {
//                         i.classList.remove('slider-active');
//                     });
//                     sliderNav[i].classList.add('slider-active');
//                 }
//             });
//     });
// }

// sliderNext.addEventListener('click', sliderNavigation());