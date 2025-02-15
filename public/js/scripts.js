// Inicializa AOS (Animações ao rolar)
AOS.init();

// Efeito de digitação no título
var typed = new Typed("#typing-effect", {
    strings: ["Transforme sua clínica!", "Gestão odontológica moderna!"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// Rolagem suave ao clicar nos links da navbar
document.querySelectorAll('a.nav-link, a.btn[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Ajuste para navbar fixa
                behavior: "smooth"
            });
        }
    });
});
