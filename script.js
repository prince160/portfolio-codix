function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.section');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2  // Ajustez le seuil ici
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const link = document.querySelector(`a[href="#${entry.target.id}"]`);

            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Fonction pour activer le lien correspondant à la section visible au chargement de la page
    const activateMenuLinkOnLoad = () => {
        sections.forEach(section => {
            const link = document.querySelector(`a[href="#${section.id}"]`);
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop >= 0 && sectionTop < window.innerHeight) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    activateMenuLinkOnLoad();
});
