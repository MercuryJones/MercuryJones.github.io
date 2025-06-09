const getRestaurants = async () => {
    const url = "https://mercuryjones.github.io/projects/project05/restaurants.json";
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const getMap = (address) => {
    const encoded = encodeURIComponent(address);
    return `https://maps.google.com/maps?q=${encoded}&t=&z=15&ie=UTF8&iwloc=&&output=embed`;
  };
  
  const showRestaurants = async () => {
    const restaurants = await getRestaurants();
    const container = document.getElementById("restaurant-list");
  
    restaurants.forEach((restaurant) => {
      const section = document.createElement("section");
  
      const img = document.createElement("img");
      img.src = restaurant.image;
      img.alt = restaurant.name;
      section.appendChild(img);
  
      const h3 = document.createElement("h3");
      h3.innerText = restaurant.name;
      section.appendChild(h3);
  
      const cuisine = document.createElement("p");
      cuisine.innerText = `Cuisine: ${restaurant.cuisine}`;
      section.appendChild(cuisine);
  
      const address = document.createElement("p");
      address.innerText = `Address: ${restaurant.address}`;
      section.appendChild(address);
  
      const rating = document.createElement("p");
      rating.innerText = `Rating: ${restaurant.rating}`;
      section.appendChild(rating);
  
      // Add click listener to open modal
      section.addEventListener("click", () => openModal(restaurant));
  
      container.appendChild(section);
    });
  };
  
  showRestaurants();
  