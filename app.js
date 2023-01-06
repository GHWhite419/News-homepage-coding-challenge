const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');

menuOpen.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
    console.log('Success');
})

menuClose.addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
    console.log('Success');
})