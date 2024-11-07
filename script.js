
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

// Close the menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.remove('active'); // Hide the menu
    });
});

// Ensure the event listener is added after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            const navbar = document.querySelector('.navbar');
            navbar.classList.remove('active'); // Hide the menu
        });
    });
});

