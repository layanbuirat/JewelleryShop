document.addEventListener("DOMContentLoaded", function () {
  // حدد الفوتر لإضافة الأقسام قبله
  const footer = document.querySelector(".footer");

  // إنشاء القسم العلوي للصورة والعناصر
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
  separator.textContent = " > ";

  const contactText = document.createElement("span");
  contactText.textContent = "Contact";

  breadcrumbs.appendChild(homeLink);
  breadcrumbs.appendChild(separator);
  breadcrumbs.appendChild(contactText);

  titleOverlay.appendChild(title);
  fullImageSection.appendChild(titleOverlay);
  fullImageSection.appendChild(breadcrumbs);

  document.body.insertBefore(fullImageSection, footer);

  // قسم معلومات التواصل
  const contactInfoSection = document.createElement("div");
  contactInfoSection.classList.add("contact-info-section");

  const contactItems = [
    { icon: "fas fa-envelope", title: "Email", details: ["info@webmail.com", "jobs.webmail@mail.com"] },
    { icon: "fas fa-phone", title: "Phone Number", details: ["+ 97656 8675 7864 7", "+876 766 8675 765 6"] },
    { icon: "fas fa-home", title: "Office Address", details: ["19/A, Cirikon City hall", "Tower New York, NYC."] },
  ];

  contactItems.forEach(item => {
    const contactBox = document.createElement("div");
    contactBox.classList.add("contact-box");

    const iconElement = document.createElement("i");
    iconElement.className = item.icon;

    const titleElement = document.createElement("h3");
    titleElement.textContent = item.title;

    const detailsElement = document.createElement("p");
    detailsElement.innerHTML = item.details.join("<br>");

    contactBox.appendChild(iconElement);
    contactBox.appendChild(titleElement);
    contactBox.appendChild(detailsElement);

    contactInfoSection.appendChild(contactBox);
  });

  document.body.insertBefore(contactInfoSection, footer);

  // قسم الخريطة
  const mapSection = document.createElement("div");
  mapSection.classList.add("map-section");

  const mapIframe = document.createElement("iframe");
  mapIframe.src = "https://www.google.com/maps?q=19/A,Cirikon%20City%20hall%20Tower%20New%20York,%20NYC.&output=embed";
  mapIframe.width = "100%";
  mapIframe.height = "450";
  mapIframe.frameBorder = "0";
  mapIframe.style.border = "0";
  mapIframe.allowFullscreen = true;

  mapSection.appendChild(mapIframe);
  document.body.insertBefore(mapSection, footer);

  // قسم الإدخال
  const formSection = document.createElement("div");
  formSection.classList.add("form-section");

  const inputGroups = [
    [
      { icon: "fas fa-user", label: "Full Name", type: "text", id: "full-name", placeholder: "Full Name" },
      { icon: "fas fa-envelope", label: "Email Address", type: "email", id: "email", placeholder: "Email Address" },
    ],
    [
      { icon: "fas fa-phone", label: "Phone Number", type: "tel", id: "phone", placeholder: "Add Your Phone Number" },
      { icon: "fas fa-book", label: "Subject", type: "text", id: "subject", placeholder: "Subject" },
    ],
  ];

  inputGroups.forEach(group => {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    group.forEach(field => {
      const inputField = document.createElement("div");
      inputField.classList.add("input-field");

      const icon = document.createElement("i");
      icon.className = field.icon;

      const label = document.createElement("label");
      label.setAttribute("for", field.id);
      label.textContent = field.label;

      const input = document.createElement("input");
      input.type = field.type;
      input.id = field.id;
      input.placeholder = field.placeholder;

      // إنشاء عنصر الرسالة
      const errorMessage = document.createElement("span");
      errorMessage.classList.add("error-message");
      errorMessage.style.color = "red";
      errorMessage.style.display = "none";
      errorMessage.textContent = "Request Information";

      inputField.appendChild(icon);
      inputField.appendChild(label);
      inputField.appendChild(input);
      inputField.appendChild(errorMessage);

      inputGroup.appendChild(inputField);
    });

    formSection.appendChild(inputGroup);
  });

  const messageField = document.createElement("div");
  messageField.classList.add("input-field");

  const messageIcon = document.createElement("i");
  messageIcon.classList.add("fas", "fa-pen");

  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");
  messageLabel.textContent = "Enter Message";

  const messageInput = document.createElement("textarea");
  messageInput.id = "message";
  messageInput.placeholder = "Enter Your Message";

  // إنشاء عنصر الرسالة لحقل النص
  const messageError = document.createElement("span");
  messageError.classList.add("error-message");
  messageError.style.color = "red";
  messageError.style.display = "none";
  messageError.textContent = "Request Information";

  messageField.appendChild(messageIcon);
  messageField.appendChild(messageLabel);
  messageField.appendChild(messageInput);
  messageField.appendChild(messageError);

  formSection.appendChild(messageField);

  const submitButton = document.createElement("button");
  submitButton.classList.add("submit-button");
  submitButton.textContent = "GET FREE QUOTE";

  // إضافة حدث النقر على زر الإرسال
  submitButton.addEventListener("click", (event) => {
    event.preventDefault(); // منع الإرسال الافتراضي للنموذج
    let isValid = true;

    // التحقق من الحقول
    const inputs = formSection.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      const errorMessage = input.nextElementSibling; // الرسالة تحت الحقل
      if (input.value.trim() === "") {
        errorMessage.style.display = "block"; // عرض الرسالة
        isValid = false;
      } else {
        errorMessage.style.display = "none"; // إخفاء الرسالة
      }
    });

    // إذا كان الكل صحيحًا
    if (isValid) {
      alert("Form submitted successfully!");
    }
  });

  formSection.appendChild(submitButton);

  // إضافة القسم إلى الصفحة
  document.body.appendChild(formSection);

  document.body.insertBefore(formSection, footer);

  // زر العودة للأعلى
  const backToTopButton = document.createElement("button");
  backToTopButton.classList.add("back-to-top-button");

  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-arrow-up");

  backToTopButton.appendChild(icon);
  backToTopButton.textContent = " Back to Up";

  document.body.appendChild(backToTopButton);

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

//footer
// footer 
// إنشاء قسم الـ footer
const footer = document.createElement("footer");
footer.classList.add("footer");

// الصف الأول: أيقونة المجوهرات والعنوان، وأيقونات السوشيال ميديا مع الخريطة
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

// الصف الثاني: الروابط
const footerLinksRow = document.createElement("div");
footerLinksRow.classList.add("footer-links-row");
footerLinksRow.innerHTML = `
     <a href="#">Home</a>
     <a href="#">About Us</a>
     <a href="#">News</a>
     <a href="#">Gallery</a>
     <a href="#">Contact</a>
 `;

// الصف الثالث: معلومات التواصل وصندوق البحث والموقع
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

// تجميع جميع العناصر في الـ footer
footer.appendChild(footerTopRow);
footer.appendChild(footerLinksRow);
footer.appendChild(footerBottomRow);
document.body.appendChild(footer);



