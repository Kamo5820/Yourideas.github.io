// script.js

const video1Input = document.getElementById('video1');
const video1Thumbnail = document.getElementById('video1-thumbnail');
const video2Input = document.getElementById('video2');
const video2Thumbnail = document.getElementById('video2-thumbnail');
const video3Input = document.getElementById('video3');
const video3Thumbnail = document.getElementById('video3-thumbnail');
const submitBtn = document.getElementById('submit-btn');

video1Input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        const thumbnailUrl = event.target.result;
        video1Thumbnail.src = thumbnailUrl;
    };
    reader.readAsDataURL(file);
});

video2Input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        const thumbnailUrl = event.target.result;
        video2Thumbnail.src = thumbnailUrl;
    };
    reader.readAsDataURL(file);
});

video3Input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        const thumbnailUrl = event.target.result;
        video3Thumbnail.src = thumbnailUrl;
    };
    reader.readAsDataURL(file);
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video1', video1Input.files[0]);
    formData.append('video2', video2Input.files[0]);
    formData.append('video3', video3Input.files[0]);
    formData.append('serviceText', document.getElementById('service-text').value);

    fetch('/upload', {
        method: 'POST',
        body: formData,
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// server.js

const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

app.post('/upload', upload.array('videos', 3), (req, res) => {
    // Save the files to the server
    const video1 = req.files[0];
    const video2 = req.files[1];
    const video3 = req.files[2];
    const serviceText = req.body.serviceText;

    // Save the files to the database
    // ...

    res.json({ message: 'Files uploaded successfully!' });
});

app.listen(300, () => {
    console.log('Server started on port 300');
});
