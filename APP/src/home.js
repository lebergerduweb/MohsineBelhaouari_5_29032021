function diplayHomeProduct() 
{
  // Ici on creer et paramètre l'element <ul>
  const product = document.getElementById("list");
  const listProduct = document.createElement("ul");
  product.appendChild(listProduct);

  // Ici on importe la liste des produits sur la page Home 
  fetch(url)
    .then(function(res) 
    {
      if (res.ok) 
      {
        return res.json();
      }
    })
    .then(function(value) 
    {
      for (let object of value) 
          {
            listProduct.innerHTML += '<li><a href="http://localhost:5500/app/product.html?product=' + object._id + '">' + object.name + '</a></li>';
          }
    })
    .catch(function(err) 
    {
      console.log(err)
    });
}

diplayHomeProduct()
