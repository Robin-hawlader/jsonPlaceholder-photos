const url = 'https://jsonplaceholder.typicode.com/photos';
fetch(`${url}`)
    .then(res => res.json())
    .then(data => displayPhotos(data));

const displayPhotos = photos => {
    photos.forEach(photo => {
        cartItem(photo)
    })
}
const cartItem = photo => {
    const album = document.getElementById('album');
    const div = document.createElement('div');
    div.classList.add('cart');
    div.innerHTML = `
    <div class="image">
    <img src="${photo.thumbnailUrl}" width=250px;>
    </div>
    <div class="text-property">
    <h2>Title: ${photo.title}</h2>
    </div>
    `;
    album.appendChild(div);
}
cartItem()