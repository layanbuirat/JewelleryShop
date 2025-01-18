// add edit product's 
document.addEventListener("DOMContentLoaded", function () {
    // إنشاء عناصر واجهة المستخدم
    const fullImageSection = document.createElement("div");
    fullImageSection.classList.add("full-image-section");

    const titleOverlay = document.createElement("div");
    titleOverlay.classList.add("title-overlay");

    const title = document.createElement("h1");
    title.textContent = "Contact Us";
    title.style.color = "white";
    title.style.fontSize = "28px";

    const breadcrumbs = document.createElement("div");
    breadcrumbs.classList.add("breadcrumbs");

    const homeLink = document.createElement("span");
    homeLink.textContent = "Home";
    homeLink.style.color = "#FFD700";
    homeLink.style.cursor = "pointer";
    homeLink.addEventListener("click", function () {
        window.location.href = "index.html";
    });

    const separator = document.createElement("span");
    separator.textContent = " > Contact < ";
    separator.style.color = "#FFD700";
    separator.style.cursor = "pointer";
    separator.addEventListener("click", function () {
        window.location.href = "contact.html";
    });

    const contactText = document.createElement("span");
    contactText.textContent = " ";

    breadcrumbs.appendChild(homeLink);
    breadcrumbs.appendChild(separator);
    breadcrumbs.appendChild(contactText);

    titleOverlay.appendChild(title);
    fullImageSection.appendChild(titleOverlay);
    fullImageSection.appendChild(breadcrumbs);

    // إنشاء الـ footer
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerTopRow = document.createElement("div");
    footerTopRow.classList.add("footer-top-row");
    footerTopRow.innerHTML = `
        <div class="footer-logo-section">
            <i class="fas fa-gem"></i>
            <div>
                <a>LARAMISS</a>
                <p>LUXURY PIECES</p>
            </div>
        </div>
        <div class="footer-social-map">
            <div class="footer-icons">
                <div class="icon"><i class="fab fa-facebook-f"></i></div>
                <div class="icon"><i class="fab fa-instagram"></i></div>
                <div class="icon"><i class="fab fa-twitter"></i></div>
            </div>
            <div class="footer-map">
                <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0104%2C40.7112%2C-73.9999%2C40.7144" 
                        width="200" height="150" style="border: none;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    `;

    const footerLinksRow = document.createElement("div");
    footerLinksRow.classList.add("footer-links-row");
    footerLinksRow.innerHTML = `
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">News</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
    `;

    const footerBottomRow = document.createElement("div");
    footerBottomRow.classList.add("footer-bottom-row");
    footerBottomRow.innerHTML = `
        <div class="footer-contact-section">
            <i class="fas fa-envelope"></i>
            <div>
                <p>Email Address</p>
                <p>info@example.com</p>
            </div>
            <i class="fas fa-phone"></i>
            <div>
                <p>Phone Number</p>
                <p>+987 876 765 76 577</p>
            </div>
        </div>
        <div class="footer-search-section">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="search">
        </div>
        <div class="footer-address-section">
            <i class="fas fa-map-marker-alt"></i>
            <div>
                <p>Office Address</p>
                <p>14/A, Miranda City, NYC</p>
            </div>
        </div>
    `;

    footer.appendChild(footerTopRow);
    footer.appendChild(footerLinksRow);
    footer.appendChild(footerBottomRow);

    // إضافة العناصر إلى الصفحة
    document.body.insertBefore(fullImageSection, document.body.firstChild);
    document.body.appendChild(footer);

    // إدارة المنتجات
    let products = [];
    let counter = 0;
    const form = document.getElementById("productForm");
    const productList = document.getElementById("productList");
    const counterDisplay = document.getElementById("counter");
    const increaseCounterButton = document.getElementById("increaseCounter");
    const productDetailsSection = document.querySelector(".product-details");
    const toggleProductDetailsButton = document.getElementById("toggleProductDetails");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const id = document.getElementById("productId").value;
            const name = document.getElementById("name").value.trim();
            const description = document.getElementById("description").value.trim();
            const price = document.getElementById("price").value.trim();
            const category = document.getElementById("category").value.trim();

            if (!name || !description || !price || !category) {
                Swal.fire("Error", "All fields are required", "error");
                return;
            }

            if (id) {
                const productIndex = products.findIndex((p) => p.id === id);
                if (productIndex > -1) {
                    products[productIndex] = { id, name, description, price, category };
                    Swal.fire("Updated", "Product updated successfully", "success");
                }
            } else {
                const newProduct = {
                    id: Date.now().toString(),
                    name,
                    description,
                    price,
                    category,
                };
                products.push(newProduct);
                Swal.fire("Added", "Product added successfully", "success");
            }

            form.reset();
            renderProducts();
        });
    }

    function renderProducts() {
        if (productList) {
            productList.innerHTML = products
                .map(
                    (product) => `
                <tr>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                    <td>${product.category}</td>
                    <td>
                        <button onclick="editProduct('${product.id}')">Edit</button>
                        <button onclick="deleteProduct('${product.id}')">Delete</button>
                    </td>
                </tr>
            `
                )
                .join("");
        }
    }

    window.editProduct = function (id) {
        const product = products.find((p) => p.id === id);
        if (product) {
            document.getElementById("productId").value = product.id;
            document.getElementById("name").value = product.name;
            document.getElementById("description").value = product.description;
            document.getElementById("price").value = product.price;
            document.getElementById("category").value = product.category;
        }
    };

    window.deleteProduct = function (id) {
        Swal.fire({
            title: "Are you sure?",
            text: "This action cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                products = products.filter((p) => p.id !== id);
                renderProducts();
                Swal.fire("Deleted", "Product deleted successfully", "success");
            }
        });
    };

    if (increaseCounterButton) {
        increaseCounterButton.addEventListener("click", () => {
            counter++;
            if (counterDisplay) {
                counterDisplay.textContent = counter;
            }
        });
    }

    if (toggleProductDetailsButton && productDetailsSection) {
        toggleProductDetailsButton.addEventListener("click", () => {
            const isVisible = productDetailsSection.style.display === "block";
            productDetailsSection.style.display = isVisible ? "none" : "block";
            toggleProductDetailsButton.textContent = isVisible ? "Show Product" : "Hide Product";
        });
    }
});