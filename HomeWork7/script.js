let links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        links.forEach(link => link.classList.remove('active'));

        this.classList.add('active');

        const targetSection = document.querySelector(this.getAttribute('href'));
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');
    });
});

const url = new URL(window.location.href);
if (url.hash) {
    const targetSection = document.querySelector(url.hash);
    if (targetSection) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');

        const targetLink = document.querySelector(`nav a[href="${url.hash}"]`);
        links.forEach(link => link.classList.remove('active'));
        targetLink.classList.add('active');
    }
}