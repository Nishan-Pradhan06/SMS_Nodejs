
// JavaScript for handling navigation clicks
const navLinks = document.querySelectorAll('.sidebar a');
const contentSections = document.querySelectorAll('.content section');
contentSections.forEach(section => section.style.display = 'none');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior

        // Remove 'active' class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');

        // Hide all content sections
        contentSections.forEach(section => section.style.display = 'none');

        // Show the corresponding content section based on the href
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    });
});
