// hamburger menu 

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });
        burger.classList.toggle("toggle");
    });
    
    
};

navSlide();

// gallery

window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });


// contact form

function errorPage() {
    let body = document.querySelector("body");
    let html = `
    <section class="error">
        <i class="fas fa-exclamation-triangle"></i>
        <h1>OH NO !</h1>
        <h1>ERROR 404 !</h1>
        <h1>PAGE NOT FOUND !</h1>
        <h2>CONTACT ME ! ! !</h2>
        <div>
            <a href="https://www.facebook.com"  target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.instagram.com"  target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.twitter.com"  target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.github.com"  target="_blank"><i class="fab fa-github"></i></a>
        </div>
    </section>
    `;
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        body.innerHTML = html;
    }
    
};


window.addEventListener("scroll", () => {
    setTimeout(function() {
        errorPage();
    }, 2000);
    
        
});




