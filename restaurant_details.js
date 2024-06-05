document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get('id');
  console.log('Restaurant ID from URL:', restaurantId);

  fetch('./data/restaurants.json')
    .then(response => response.json())
    .then(data => {
      console.log('Fetched Restaurants:', data);
      const restaurant = data.find(r => r.id == restaurantId);
      console.log('Restaurant found:', restaurant);

      if (restaurant) {
        document.getElementById('restaurant_name').textContent = restaurant.name;
        document.getElementById('restaurant_image').src = restaurant.image;
        document.getElementById('restaurant_address').textContent = restaurant.address;
        document.getElementById('restaurant_stars').innerHTML = generateStars(restaurant.stars);
        document.getElementById('restaurant_phone').textContent = restaurant.phone;
        document.getElementById('restaurant_website').href = restaurant.website;
        document.getElementById('restaurant_website').textContent = restaurant.website;
        document.getElementById('restaurant_type').textContent = restaurant.type;
        document.getElementById('restaurant_mail').textContent = restaurant.email;
        document.getElementById('restaurant_mail').href = restaurant.email;




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
