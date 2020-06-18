const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('*');

    burger.addEventListener('click', ()=>{
        // Disable scroll
        body.classList.toggle('body-no-scroll-y');
        // Toggle nav bar
        nav.classList.toggle('nav-active');
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.15s ease forwards ${index / 16 + 0.15}s`;
            }
        });
        // Burger animation
        burger.classList.toggle('toggle');
    });
    
}

const app = ()=>{
    navSlide();
}

app();