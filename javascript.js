/* Add sliding animation to about me*/

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('p--visible'); // Add class to start animation
            }
        });
    });

    const aboutMeSection = document.querySelector('.About-me-section');
    observer.observe(aboutMeSection);
}); 


/* Add function to the skills */
function Pressed(id) {
    var clickedItem = document.getElementById(id);

    // Toggle 'active' class on the clicked item
    if (clickedItem.classList.contains('active')) {
        clickedItem.classList.remove('active');

        document.querySelectorAll('.skill-item').forEach(item => {
            item.classList.remove('hidden')
        });
        
    } else {
        // Remove 'active' class from all skill items
        document.querySelectorAll('.skill-item').forEach(item => {
            item.classList.remove('active');
            item.classList.add('hidden')
        });

        // Add 'active' class to the clicked skill item
        clickedItem.classList.remove('hidden');
        clickedItem.classList.add('active');

    }
}