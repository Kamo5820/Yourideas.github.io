const popupContainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('#close-btn');
const sectionButtons = document.querySelectorAll('.section-button');

sectionButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const buttonId = button.id;
        const popupTitle = button.textContent;
        const popupContent = getPopupContent(buttonId);

        popupContainer.style.display = 'block';
        popup.style.display = 'block';
        document.querySelector('#popup-title').textContent = popupTitle;
        document.querySelector('.popup-content').innerHTML = popupContent;
    });
});

closeBtn.addEventListener('click', () => {
    popupContainer.style.display = 'none';
    popup.style.display = 'none';
});

function getPopupContent(buttonId) {
    const button = document.querySelector(`#${buttonId}`);
    const htmlUrl = button.getAttribute('data-html');

    if (htmlUrl !== '#') {
        fetch(htmlUrl)
            .then(response => response.text())
            .then(html => {
                return html;
            });
    } else {
        switch (buttonId) {
            case 'categories-btn':
                return '<h2>Categories</h2><p>This is the Categories page.</p>';
            case 'upload-btn':
                return '<h2>Upload</h2><p>This is the Upload page.</p>';
            case 'logout-btn':
                return '<h2>Log Out</h2><p>This is the Log Out page.</p>';
            default:
                return '';
        }
    }
}