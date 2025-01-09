// Apply fade-out animation before navigating
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Prevent default navigation
            const href = event.target.href;

            // Add fade-out class to page
            document.querySelector('.page-transition').classList.add('fade-out');

            // Wait for animation to complete, then navigate
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the animation duration in CSS
        });
    });
});
