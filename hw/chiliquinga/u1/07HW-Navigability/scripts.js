document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('#links a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#0056b3';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#007BFF';
        });
    });
});
