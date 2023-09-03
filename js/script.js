// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger meni di klik

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}
// klik diluar sidebar untuk menghilangkan navbar

const hb = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    if(!hb.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    };
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    };
});