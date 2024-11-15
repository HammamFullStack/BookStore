const navCollapse = document.querySelector('.nav-collapse');
const navLinks = document.querySelector('.nav-links');
const smallScreen = window.matchMedia('(max-width: 426px)');

function togglMenu(){
    if(smallScreen.matches){
        navLinks.style.display = navLinks.style.display === 'flex'?'none':'flex';
    }
}

navCollapse.addEventListener('click', togglMenu);

function handleResize() {
    if (!smallScreen.matches) {
        navLinks.style.display = '';
    }
}
window.addEventListener('resize', handleResize);