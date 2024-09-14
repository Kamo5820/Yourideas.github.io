window.addEventListener('scroll', function() {
    const images = document.querySelectorAll('.image-container img');
    images.forEach(image => {
        const rect = image.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            image.classList.add('fade');
        } else {
            image.classList.remove('fade');
        }
    });
});
