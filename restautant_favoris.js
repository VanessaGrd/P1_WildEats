document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const restaurantId = parseInt(urlParams.get('id'), 10);
    console.log('Restaurant ID from URL:', restaurantId);
  
    fetch('./data/restaurants.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched Restaurants:', data);
        const restaurant = data.find(r => r.id === restaurantId);
        console.log('Restaurant found:', restaurant);
  
        if (restaurant) {
          document.getElementById('restaurant_name').textContent = restaurant.name;
  
          // Clear and add multiple images
          const imagesContainer = document.getElementById('restaurant_images');
          if (imagesContainer) {
            imagesContainer.innerHTML = '';
            restaurant.images.forEach(image => {
              const imgElement = document.createElement('img');
              imgElement.src = image;
              imgElement.alt = restaurant.name;
              imagesContainer.appendChild(imgElement);
            });
          }
  
          document.getElementById('restaurant_address').textContent = restaurant.address;
          document.getElementById('restaurant_stars').innerHTML = generateStars(restaurant.stars);
          document.getElementById('restaurant_phone').textContent = restaurant.phone;
          document.getElementById('restaurant_website').href = restaurant.website;
          document.getElementById('restaurant_website').textContent = restaurant.website;
          document.getElementById('restaurant_type').textContent = restaurant.type;
          document.getElementById('restaurant_mail').textContent = restaurant.email;
          document.getElementById('restaurant_mail').href = `mailto:${restaurant.email}`;
  
          // Handle favorites
          const iconHeart = document.getElementById('iconHeart');
          const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
          if (favorites.includes(restaurantId)) {
            iconHeart.src = 'assets/heart.svg';
            iconHeart.alt = 'heartVert';
          } else {
            iconHeart.src = 'assets/iconHeart.svg';
            iconHeart.alt = 'iconHeart';
          }
  
          iconHeart.addEventListener('click', () => {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            if (favorites.includes(restaurantId)) {
              favorites = favorites.filter(id => id !== restaurantId);
              iconHeart.src = 'assets/iconHeart.svg';
              iconHeart.alt = 'iconHeart';
              restaurant.favorite = false;
            } else {
              favorites.push(restaurantId);
              iconHeart.src = 'assets/heart.svg';
              iconHeart.alt = 'heartVert';
              restaurant.favorite = true;
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
          });
        } else {
          console.error('Restaurant not found');
        }
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
  