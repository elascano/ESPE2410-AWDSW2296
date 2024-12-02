document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');

    // Get current page from URL
    const currentPage = window.location.pathname.split('/').pop();

    // Highlight active nav-item
    navItems.forEach(item => {
        if (item.dataset.link === currentPage) {
            item.classList.add('active');
        }

        // Add click functionality to navigate
        item.addEventListener('click', () => {
            window.location.href = item.dataset.link;
        });
    });
});
