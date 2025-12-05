document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        // Toggle the 'active' class to show/hide the menu
        navMenu.classList.toggle('active');
        
        // Optional: Animate the hamburger icon to an 'X'
        menuToggle.classList.toggle('is-active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });
});