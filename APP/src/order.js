// Ici on gere la validation de la commande
const formOrder = document.getElementById("cart-page");
formOrder.addEventListener("submit", validateTheOrder);

function validateTheOrder(e) 
{
    e.preventDefault();
    let lastName = formOrder.querySelector('[name="lastName"]').value;
    let firstName = formOrder.querySelector('[name="firstName"]').value;
    let email = formOrder.querySelector('[name="email"]').value;
    let address = formOrder.querySelector('[name="address"]').value;
    let city = formOrder.querySelector('[name="city"]').value;
    let products = productsOrder();
    let obj = 
    {
        "contact": 
        {
            "lastName": lastName,
            "firstName": firstName,
            "email": email,
            "address": address,
            "city" : city
        },
        "products": products
    };
    if (products.length > 0) {
       fetch(url + '/order', 
        {
            method: "POST",
            headers:  
            {
            'Accept': 'application/json', 
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(function(res) 
        {
            if (res.ok) 
            {
            return res.json()
            }
        })
        .then(function(res) 
        {
        document
            .getElementById("order-status")
            .innerText = "order Id : " + res.orderId;

            localStorage.clear()
            displayProductsCart()
            displayTotalPriceCart()
        })
        .catch(function(err)
        {
            console.log(err)
        }); 
    } else {
       document.getElementById("order-status").innerText = "Attention votre panier est vide"
    }
}