
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
  let result;
  try {
    result = await fetch(`https://pokeapi.co/api/v2/berry/${berryCode}`);
    console.log(result);
  } catch (error) {
    console.log("There was an error");
    alert("Error fetching data.");
    console.log("I went to the store, I never made it back.");
    console.log(error);
    return;
  }
  let data;
  if(result.ok === true) {
    // step 2: read data as JSON.
    data = await result.json();
    // proof of life for data
    console.log(data);
    console.log("I went the store, and got the milk.");
  } else {
    if(result.status === 404) {
      alert(`Error: ${berryCode} not found`);
      console.log("I went to the store, there was no milk.");
    } else {
      alert("Error: " + result.status);
      console.log("I went to the store, but didn't get milk for some other reason.");
    }
    return; // return because there is no data
  }
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
