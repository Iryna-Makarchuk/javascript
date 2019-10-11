const navigation = document.getElementById('navigation-block');
const burger = document.getElementById('burger-id');
const closeMenu = document.getElementById('close-menu');

burger.addEventListener('click', () => {
    navigation.setAttribute('style', 'display: block');
});

closeMenu.addEventListener('click', () => {
    navigation.setAttribute('style', 'display: none');
});