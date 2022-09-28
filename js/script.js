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

function transparency () {
    let opacity = header.style.opacity;

    setTimeout(function() {
        setInterval(function func() {
            if (opacity >= 0.1 && header.style.position == 'fixed') { 
                opacity -= 0.1;
                header.style.opacity = opacity;
            }
        }, 60);
    }, 2000); 
}

function showingHeaderByMouseBelow () {
    header.addEventListener('mouseenter', () => {
        header.style.opacity = 1;
    });

    header.addEventListener('mouseleave', () => {
        transparency();
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
                showingHeaderByMouseBelow();
                transparency();
            } else {
                header.style.position = 'absolute';
                header.style.opacity = 1;
            }
        }  
    });
});