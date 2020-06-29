function navSlide() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('*');
    const showreel = document.querySelector('.center-home-header');

    burger.addEventListener('click', ()=>{
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

function hideShowreelBurger() {
    const burger = document.querySelector('.burger');
    const body = document.querySelector('*');
    const showreel = document.querySelector('.center-home-header');
    burger.addEventListener('click', ()=>{
        // Disable scroll
        body.classList.toggle('body-no-scroll-y');
       showreel.classList.toggle('center-home-header-invisible');
    });
}

function fadeScrollAnim() {
    const presentation = document.querySelector('.presentationasso');
    window.addEventListener('scroll', ()=>{
        // Activate animation class
        presentationasso.classList.toggle('presentationassodisable');
    });
}