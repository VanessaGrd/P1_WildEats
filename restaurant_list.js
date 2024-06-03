function generateStars(count) {
  let starsHtml = "";
  for (let i = 0; i < count; i++) {
    starsHtml += '<img src="./assets/star.svg" alt="star">';
  }
  return starsHtml;
}

function createRestaurantCard(restaurant) {
  return `
      <a href="restaurant_detail.html?id=${
        restaurant.id
      }" class="restaurant_card">
          <img class="restaurant_picture" src="${restaurant.image}" alt="${
    restaurant.name
  }">
          <div class="title">
              <div class="stars_like">
                  <div class="stars_block">
                      <h3>${restaurant.name}</h3>
                      <div>
                          ${generateStars(restaurant.stars)}
                      </div>
                  </div>
                  <img class="favoris" src="./assets/heart.svg" alt="favoris">
              </div>
              <p>${restaurant.address}</p>
          </div>
      </a>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const restaurantListContainer = document.getElementById("restaurant_list");

  fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched Restaurants:', data);
      data.forEach(restaurant => {
        restaurantListContainer.innerHTML += createRestaurantCard(restaurant);
      });
    })
    .catch(error => console.error('Error fetching restaurant data:', error));
});
