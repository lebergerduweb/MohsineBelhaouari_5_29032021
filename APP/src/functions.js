// Ici on affiche dynamiquement 1 produit 
function displayOneProduct(response) 
{
  const titleElt = document.querySelector("title");
  const h1Elt = document.querySelector("h1");
  const imgElt = document.querySelector("#product > div");
  const descriptionElt = document.querySelector("#description");
  const lensesElt = document.querySelector("select");
  const priceElt = document.querySelector("#price");
  // Ici font parties des champs chaches du formulaire
  const productInputElt = document.querySelector("form > input");
  const titleInputElt = document.querySelector("[name='title']");
  const priceInputElt = document.querySelector("[name='price']");

  titleElt.innerText = response.name;
  h1Elt.innerText = response.name;
  imgElt.innerHTML = '<img src="' + response.imageUrl + '" class="w3-border w3-padding" style="width: 100%;" alt="" />';
  descriptionElt.innerText = response.description;
  priceElt.innerText = priceConverter(response.price, "€");
  
  for (let i in response.lenses) 
  {
    // Valeur non geré à la soumission du formulaire
    lensesElt.innerHTML += '<option value="' + response.lenses[i] + '">' + response.lenses[i] + "</option>";
  }
  // Ci dessous on set la valeur des attributs values des champs cachés
  productInputElt.setAttribute("value", response._id);
  titleInputElt.setAttribute("value", response.name);
  priceInputElt.setAttribute("value", response.price);
}

// Ici nous utilisons la fonction de l'attribut html onclick du btn "ajouter au panier"
function saveProduct() 
{
  let productId = document.forms.productForm.product.value;
  let title = document.forms.productForm.title.value;
  let price = document.forms.productForm.price.value;
  let product = 
  {
    title: title,
    price: price
  };
  localStorage.setItem(productId, JSON.stringify(product));
}

// Ici on gere l'envoi des produits à la validation de la commande
function productsOrder() 
{
  let products = []; 

  for (let i = 0; i < localStorage.length; i++) 
  {
    products.push(localStorage.key(i));  
  }    
  return products;
}


// Fonction globale de converteur de prix
function priceConverter(price, currency = null) 
{
    return price / 100 + ' ' + currency;
}