
function displayProductPage() {
  // Ici on récupere les parametres de l'url ex: ?product=123456789
  const queryString = document.location.search;

  // Ici on créer un objet URLSearchParams qui prend en paramettre les paramettres de l'url afin d'avoir acces à la méthode Get qui retourne l'id du produit
  const urlParams = new URLSearchParams(queryString); 
  // Ici on recupere la valeur du parametre product
  let product = urlParams.get("product");

  fetch(url + product)
    .then(function(res) 
    {
      if (res.ok) 
      {
        return res.json();
      }
    }) 
    .then(function(value) 
    {
      displayOneProduct(value);
    })
    .catch(function(err) 
    {
      console.log(err)
    });
}

displayProductPage()

// Gestion du formulaire d'ajout au pannier
const form = document.getElementById("productForm");
// ici on prend en charge l'evenement submit
form.addEventListener('submit', function(e) 
{
  e.preventDefault();
});