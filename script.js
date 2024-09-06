
let fetchButton = document.getElementById("fetch-button");
let upcInput = document.getElementById("food-code");
let outputDiv = document.getElementById("product-output")

async function handleFetch(){
  console.log("hello from fetch");
  // let foodCode = "078742040370";
  let foodCode = upcInput.value;
  let result = await fetch(`https://world.openfoodfacts.org/api/v3/product/${foodCode}.json`);
  console.log(result); // proof of life
  let data = await result.json();
  console.log(data); // proof of life

  let productName = data.product.product_name;
  let brandOwner = data.product.brand_owner;
  let imgURL = data.product.image_thumb_url;
  let imgBackURL = data.product.image_ingredients_small_url;
  console.log(imgURL);
  console.log(productName); // proof of life.
  outputDiv.innerHTML = `
    <div class="card">
      <img class="card-img-top" src="${imgURL}">
      <div class="card-body"> 
        <h3 class="card-title">${productName}</h3>
        <p class="card-text">${brandOwner}</p>
      </div>
      <img class="card-img-bottom" src="${imgBackURL}">
    </div>
  `;

  // example: pokemon...
  // BASE URL: https://pokeapi.co/api/v2/
  // EXAMPLE URL: https://pokeapi.co/api/v2/pokemon/pikachu
  // let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`



}

fetchButton.addEventListener("click", handleFetch);
