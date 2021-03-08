var imageUrls = [
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://i.pinimg.com/originals/4f/82/8d/4f828d05f82b8b7aedfe8be6a7d9d2a3.png',
  'https://i.ytimg.com/vi/Q1dg4bD1mHc/maxresdefault.jpg',
  'https://miro.medium.com/max/1280/0*gUmnBbPXyTNTL8hI'
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
