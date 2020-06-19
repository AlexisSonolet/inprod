function navSlide(hideShowreelText=false) {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.querySelector('*');
    const showreel = document.querySelector('.center-home-header');

    burger.addEventListener('click', ()=>{
        // Disable scroll
        body.classList.toggle('body-no-scroll-y');
        if (hideShowreelText) {
            // Hide showreel
            showreel.classList.toggle('center-home-header-invisible');
        }
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


function app(hideShowreelText=false) {
    navSlide(hideShowreelText);
}