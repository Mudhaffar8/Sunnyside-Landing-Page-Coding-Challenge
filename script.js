const nav = document.querySelector('#main-nav__links');

function toggle_nav() {
    if (nav.classList.contains('main-nav__links--show')) {
        nav.classList.remove('main-nav__links--show');
        nav.classList.add('main-nav__links--hide');
    }
    else {
        nav.classList.add('main-nav__links--show');
        nav.classList.remove('main-nav__links--hide');
    }
}

function resizeFn() {
    if (window.innerWidth >= 751 && (nav.classList.contains('main-nav__links--show') || 
        nav.classList.contains('main-nav__links--hide'))) {
        nav.classList.remove('main-nav__links--show');
        nav.classList.remove('main-nav__links--hide');
    }
}

window.onresize = resizeFn;
resizeFn();

