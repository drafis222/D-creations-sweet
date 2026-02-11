const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const page = this.getAttribute("data-page");
        showPage(page);
    });
});


/* PRODUCT DATA */

const products = {
    cake: {
        title: "Cake",
        images: [
            "cake-1.jpg",
            "cake-2.jpg",
            "cake-3.jpg",
            "cake-4.jpg",
        ],
        description: "Customized cakes perfect for birthdays and special events. Price varies on size and design.",
        price: "Starting at ₱500"
    },
    mango: {
        title: "Mango Float",
        images: [
            "mango-float-1.jpg",
        ],
        description: "Layered mango dessert with cream and graham.",
        price: "₱120 per bucket"
    },
    cupcake: {
        title: "Cupcakes",
        images: [
            "cupcake-1.jpg",
            "cupcake-2.jpg",
            "cupcake-3.jpg",
            "cupcake-4.jpg",
        ],
        description: "Beautifully decorated cupcakes in different flavors.",
        price: "₱200 per dozen"
    }
};

let currentProduct = null;
let currentSlide = 0;


/* MODAL */

function openModal(productKey) {
    const modal = document.getElementById("productModal");
    currentProduct = products[productKey];
    currentSlide = 0;

    document.getElementById("modalTitle").textContent = currentProduct.title;
    document.getElementById("modalDescription").textContent = currentProduct.description;
    document.getElementById("modalPrice").textContent = currentProduct.price;

    updateSlide();

    const message = `Hello! I would like to order ${currentProduct.title}.`;
    document.getElementById("orderBtn").href =
        `sms:09603588486?body=${encodeURIComponent(message)}`;

    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}


/* SLIDER */

function updateSlide() {
    document.getElementById("modalImage").src =
        currentProduct.images[currentSlide];
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = currentProduct.images.length - 1;
    }

    if (currentSlide >= currentProduct.images.length) {
        currentSlide = 0;
    }

    updateSlide();
}

window.onclick = function(event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
        closeModal();
    }
};
