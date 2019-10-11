const imgMenu = document.getElementById('burger-id');
const navMenu = document.getElementById('burger-menu-open');
const close = document.getElementById('img-close');

navMenu.classList.add('hidden');

imgMenu.addEventListener('click', () => {
    if (imgMenu.className === 'burger-menu') {
        imgMenu.classList.add('hidden');
        navMenu.className = 'burger-menu-open';
    } else {
        imgMenu.className = 'burger-menu';
    }
});

close.addEventListener('click', () => {
    if (close) {
        imgMenu.className = 'burger-menu';
        navMenu.classList.add('hidden');
    }
});