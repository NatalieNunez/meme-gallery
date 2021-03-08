var imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sVgo9mXJFWcEUlSVHfM2Q3J63Qfb0XvcQA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt7WxIBBZJcd4a26IGtZK8JtPZBPhSWsnFaw&usqp=CAU',
    'https://i.redd.it/ddvaqe8bjfm51.jpg'
];
var gallery = document.querySelector('main');
var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
    if (imageUrlInput.value !== '') {
        imageUrls.push(imageUrlInput.value);
    }
    imageUrlInput.value = '';
    updateGallery();
});

function updateGallery () {
    gallery.innerHTML = '';
    for (let i = 0; i < imageUrls.length; i++) {
        var imageElement = document.createElement('img');
        imageElement.className = 'gallery-image';
        imageElement.src = imageUrls[i];
        gallery.appendChild(imageElement);
    }
}

updateGallery();
