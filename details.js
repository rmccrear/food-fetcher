
let foodCodeInput = document.getElementById("food-code");
let fetchButton = document.getElementById("fetch-button");
let keywordUL = document.getElementById("keyword-list");
let berryNameElm = document.getElementById("berry-name");

async function handleFetchFood(){
  console.log("hello from handleFetchFood");
  let berryCode = foodCodeInput.value;
  // step 1: fetch from server
  // let result = await fetch("https://world.openfoodfacts.org/api/v3/product/078742040370.json");
  // let result = await fetch("https://pokeapi.co/api/v2/item/1");
  let result = await fetch(`https://pokeapi.co/api/v2/berry/${berryCode}`);
  console.log(result);
  // step 2: read data as JSON.
  let data = await result.json();
  // proof of life for data
  console.log(data);
  let flavors = data.flavors;

  // set name of fetched berry
  let name = data.name;
  berryNameElm.textContent = name;

  // list flavors of fetched berry
  let html = '';
  for(let i=0; i<flavors.length; i++){
    let flav = flavors[i];
    html += `<li> ${flav.flavor.name} | ${flav.potency} </li> \n`;
  }
  console.log(html);
  keywordUL.innerHTML = html;
}

fetchButton.addEventListener("click", handleFetchFood);
