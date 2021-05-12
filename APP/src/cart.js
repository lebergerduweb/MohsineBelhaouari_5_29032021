// Ici on écoute l'évenement 'load' pour executer la function 
window.addEventListener('load', function() 
{
    displayProductsCart()
    displayTotalPriceCart()
});


function displayProductsCart()
{
    let productId = ''; 
    let list = '<tr><th>Nom du produit</th><th>Prix</th><th class="w3-right-align">Action</th></tr>';

    if (localStorage.length == 0) 
    {
       list = "Votre pannier est vide";
    } else 
    {
      for (let i = 0; i < localStorage.length; i++) 
        {
            productId = localStorage.key(i);
            list += '<tr><td>' + JSON.parse(localStorage.getItem(productId)).title + '</td><td>' 
                + priceConverter(JSON.parse(localStorage.getItem(productId)).price, "€") + '</td><td>' +
                '<form class="w3-right-align">' +
                    '<input type="hidden" name="productId" value="' + productId + '">' +
                    '<input type="button" value="Supprimer" onclick="removeProductCart(this.parentElement)" />' +
                '</form></td></tr>';   
        }   
    }
    document
        .getElementById("list")
        .innerHTML = list;
}

function removeProductCart(form) 
{
    // Ici on supprime le produit courant grace à la clé stocké localement
    localStorage.removeItem(form.productId.value);

    // Ici on réafiche et recalcule la liste des produits stockés localement
    displayProductsCart()
    displayTotalPriceCart()
}

// Ici on calcul le prix des articles
function displayTotalPriceCart() 
{
    let totalPrice = 0;

    for (let i = 0; i < localStorage.length; i++) 
    {
        let id = localStorage.key(i);
        let price = JSON.parse(localStorage.getItem(id)).price;
        totalPrice += parseInt(price);
    }
    document
        .getElementById("total-price")
        .innerHTML = "Prix total : " + priceConverter(totalPrice, '€'); 
}