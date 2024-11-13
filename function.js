const navCollapse = document.querySelector('.nav-collapse');
const navLinks = document.querySelector('.nav-links');

navCollapse.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex'?'none':'flex';
});