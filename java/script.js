
// ===== MENU ACTIF AUTOMATIQUE =====
const links = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "green";
        link.style.fontWeight = "bold";
    }
});


// ===== MESSAGE POUR VENTE =====
const venteLink = document.querySelector('a[href="Vente.html"]');

if (venteLink) {
    venteLink.addEventListener("click", function (event) {
        alert("Bienvenue dans la page Vente de Agro Alimentaire 🌾");
    });
}


// ===== MESSAGE POUR CONTACT =====
const contactLink = document.querySelector('a[href="Contact.html"]');

if (contactLink) {
    contactLink.addEventListener("click", function (event) {
        alert("Merci de nous contacter ! Nous vous répondrons rapidement 📞");
    });
}
// Animation au scroll
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + "$";
        cartItems.appendChild(li);
        total += parseInt(item.price);
    });

    totalElement.textContent = total;
    localStorage.setItem("cart", JSON.stringify(cart));
}

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", () => {
        const name = button.getAttribute("data-name");
        const price = button.getAttribute("data-price");

        cart.push({ name, price });
        updateCart();
        alert("Produit ajouté au panier ✅");
    });
});

updateCart();
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("form-message").textContent =
                "Merci " + name + ", votre message a été envoyé ✅";
            form.reset();
        }
    });
}
