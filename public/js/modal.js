// modal.js
export function showModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "flex";
}

export function hideModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

document.querySelector('.close-area').addEventListener('click', hideModal);

export function showModalAndInfo(info) {
    showModal();
    updateModalContent(info);
}

function updateModalContent(info) {
    var modalContent = document.getElementById("modalContent");
    var isFavorited = checkIfFavorited(info.title);
    var starClass = isFavorited ? 'favorite-icon favorited' : 'favorite-icon';
    modalContent.innerHTML = `
        <div class="favorite-container">
            <div class="${starClass}" id="favoriteIcon" onclick="toggleFavorite('${info.title}', this)">★</div>
        </div>
        <h1>${info.title} 범죄율</h1>
        <h1 style="font-size: 50px;">"${info.rate}"</h1><br>
        <h3>${info.details}</h3>
    `;
}

function checkIfFavorited(title) {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites.includes(title);
}

export function toggleFavorite(title, element) {
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    var index = favorites.indexOf(title);
    
    if (index > -1) {
        favorites.splice(index, 1);
        element.classList.remove('favorited');
    } else {
        favorites.push(title);
        element.classList.add('favorited');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesList();
}

function updateFavoritesList() {
    var favoritesList = document.getElementById('favoritesList');
    var favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    favoritesList.innerHTML = '';
    favorites.forEach(function (title) {
        var listItem = document.createElement('li');
        listItem.textContent = title;
        favoritesList.appendChild(listItem);
    });
}
