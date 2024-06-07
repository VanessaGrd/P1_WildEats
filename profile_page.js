document.addEventListener("DOMContentLoaded", function () {
  const restaurantListContainer = document.getElementById("favorites_list");
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.length === 0) {
    restaurantListContainer.innerHTML = '<p>Aucun favori trouvé.</p>';
    return;
  }

  fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data => {
      const favoriteRestaurants = data.filter(restaurant => favorites.includes(restaurant.id));
      console.log('Favorite Restaurants:', favoriteRestaurants);

      favoriteRestaurants.forEach(restaurant => {
        restaurantListContainer.innerHTML += createRestaurantCard(restaurant);
      });
    })
    .catch(error => console.error('Error fetching restaurant data:', error));
});

function generateStars(count) {
  let starsHtml = "";
  for (let i = 0; i < count; i++) {
    starsHtml += '<img src="./assets/star.svg" alt="star">';
  }
  return starsHtml;
}

function createRestaurantCard(restaurant) {
  return `
    <a href="restaurant_detail.html?id=${restaurant.id}" class="restaurant_card">
    <img class="restaurant_picture" src="${restaurant.images[0]}" alt="${restaurant.name}"/>
    <div class="title">
        <div class="stars_like">
          <div class="stars_block">
            <h3>${restaurant.name}</h3>
            <div>${generateStars(restaurant.stars)}</div>
          </div>
        </div>
        <p>${restaurant.address}</p>
      </div>
    </a>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  if (loggedInUser) {
    document.getElementById("userName").textContent = `${loggedInUser.name}`;
    document.getElementById("firstName").textContent = `${loggedInUser.surname}`;
    document.getElementById("address").textContent = `${loggedInUser.address}`;
    document.getElementById("tel").textContent = `${loggedInUser.tel}`;
    document.getElementById("campus").textContent = `${loggedInUser.campus}`;
    document.getElementById("email").textContent = `${loggedInUser.email}`;


  
    const logoutButton = document.getElementById("logoutButton");
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser");
      alert("Déconnexion réussie !");
      // Redirection vers la page de connexion ou d'accueil
    });
  } else {
    alert("Vous devez être connecté pour accéder à cette page.");
    // Redirection vers la page de connexion ou d'accueil
  }
});
