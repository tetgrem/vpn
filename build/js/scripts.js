// Custom Scripts
$(document).ready(function(){
    $('.block__title').click(function (event) {
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active_accordion');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active_accordion').next().slideToggle(300);
    })
});


function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')
    const scroll = document.querySelector('.header__block')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 120
    if (window.scrollY >= breakpoint) {
        scroll.classList.add('body_scroll')
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
        scroll.classList.remove('body_scroll')
    }
}
window.addEventListener('scroll', fixedNav)

const swiper = new Swiper('.swiper', {

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px

        991: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },

    }
});
