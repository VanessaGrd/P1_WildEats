function generateStars(count) {
  let starsHtml = "";
  for (let i = 0; i < count; i++) {
    starsHtml += '<img src="./assets/star.svg" alt="star">';
  }
  return starsHtml;
}

function createFavoriteCard(restaurant) {
  return `
    <div class="restaurant_card">
      <img class="restaurant_picture" src="${restaurant.image}" alt="${restaurant.name}">
      <div class="title">
        <div class="stars_like">
          <div class="stars_block">
            <h3>${restaurant.name}</h3>
            <div>${generateStars(restaurant.stars)}</div>
          </div>
          <img class="favoris" src="./assets/heart.svg" alt="favoris">
        </div>
        <p>${restaurant.address}</p>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const favoriteListContainer = document.getElementById("favorite_list");

  fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data => {
      const favorites = data.filter(restaurant => restaurant.favorite);
      console.log('Favorites:', favorites);
      favorites.forEach(restaurant => {
        favoriteListContainer.innerHTML += createFavoriteCard(restaurant);
      });
    })
    .catch(error => console.error('Error fetching restaurant data:', error));
});
