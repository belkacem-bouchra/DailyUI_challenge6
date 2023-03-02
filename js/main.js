let bars = document.getElementById('bars'),
    mainList = document.getElementById('main-list');

bars.addEventListener('click', function () {
    if (mainList.classList.contains('hide-list') == true) {
        console.log('list has been visible');
        mainList.classList.remove('hide-list');
        mainList.classList.add('show-list');
    }
    else {
        console.log('list has been hidden');
        mainList.classList.add('hide-list');
        mainList.classList.remove('show-list');
    }

})
let profileIcon = document.getElementById('profile'),
    dropDown = document.getElementById('dropdown');

let afterProfile = window.getComputedStyle(profileIcon, "::after");

profileIcon.addEventListener('click', function () {
    if (dropDown.classList.contains('hide-dropdown') == true) {
        console.log('show dropdown')
        dropDown.classList.add('show-dropdown');
        dropDown.classList.remove('hide-dropdown');
    }
    else {
        console.log('hide dropdown')
        dropDown.classList.remove('show-dropdown');
        dropDown.classList.add('hide-dropdown');
    }
    if (afterProfile.opacity == 0) {
        profileIcon.style.setProperty('--changeOpacity', '1');
    } else {
        profileIcon.style.setProperty('--changeOpacity', '0');
    }
})
let searchDiv = document.getElementById('search'),
    searchIconDiv = document.querySelector('.icon'),
    searchIcon = document.querySelector('.search-icon'),
    closeIcon = document.querySelector('.close-icon')
searchInput = document.getElementById('search-input');

let headerContainer = document.querySelector('header .container');
let logo = document.getElementById('logo');
let navbar = document.querySelector('nav');

searchIcon.addEventListener('click', function () {
    console.log('clicked');
    headerContainer.classList.toggle('justify-end');
    logo.classList.toggle('display-logo');
    navbar.classList.toggle('nav-gap');
    searchDiv.classList.toggle('search-width');
    searchIcon.classList.toggle('transform-search');
    closeIcon.classList.toggle('transform-close');
    searchInput.classList.toggle('display-input');

})
closeIcon.addEventListener('click', function () {
    if (searchInput.value !== '') {
        searchInput.value = '';
    }
})