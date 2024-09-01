function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.menu-item');
    const offset = 50; // Ajustez l'offset pour la détection de la section visible

    function updateActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + offset < sections[index].offsetTop) {}

        navLinks.forEach(link => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    // Initial call
    updateActiveLink();

    // Update on scroll
    window.addEventListener('scroll', updateActiveLink);

    // Update on resize (optional)
    window.addEventListener('resize', updateActiveLink);
});

