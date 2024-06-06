const logos = {
    "Pizza": "./assets/pizza.png",
    "Japanese": "./assets/sushi.png",
    "Vegetarian": "./assets/burger-vegetalien.png",
    "Burger": "./assets/burger.png",
    "Asian": "./assets/cuisine_asiatique.png",
    "Italian": "./assets/cuisine_italienne.png",
    "Mexicain": "./assets/cuisine_mexicaine.png",
    "Croissant": "./assets/croissant.png",
    "Sandwich": "./assets/sandwich.png",
    "Salade": "./assets/salade.png",
    "French": "./assets/repas.png",
  }
  
  function generateStars(count) {
    let starsHtml = "";
    for (let i = 0; i < count; i++) {
      starsHtml += '<img src="./assets/star.svg" alt="star">';
    }
    return starsHtml;
  }
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const restaurantListContainer = document.getElementById("restaurant_list");
  
    fetch('./data/restaurants.json')
      .then(response => response.json())
      .then(data => {
        const proposals = data.filter(restaurant => !restaurant.favorite);
        console.log('Proposals:', proposals);
        proposals.forEach(restaurant => {
          restaurantListContainer.innerHTML += createRestaurantCard(restaurant);
        });
      })
      .catch(error => console.error('Error fetching restaurant data:', error));
  });

  function createRestaurantCard(restaurant) {
    console.log(logos, logos[restaurant.type])
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
          <img class="restaurant_type" src="${logos[restaurant.type]}" alt="${restaurant.type}"/>
        </div>
      </a>
    `;
  }
