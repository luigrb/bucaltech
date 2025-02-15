AOS.init();

var typed = new Typed("#typing-effect", {
    strings: ["Transforme sua clínica!", "Gestão odontológica moderna!"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

document.querySelectorAll('a.nav-link, a.btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, 
                behavior: "smooth"
            });
        }
    });
});

const tiltEffect = document.querySelector(".tilt-effect");

tiltEffect.addEventListener("mousemove", function (event) {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
    tiltEffect.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

tiltEffect.addEventListener("mouseleave", function () {
    tiltEffect.style.transform = "rotateY(0deg) rotateX(0deg)";
});

