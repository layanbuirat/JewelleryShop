document.addEventListener('DOMContentLoaded', function () {
  // Toggle Navbar in Mobile View
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar ul');

  menuToggle.addEventListener('click', function () {
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
  });

  // Toggle Dropdown Menus
  document.querySelectorAll('.navbar > ul > li').forEach((item) => {
    item.addEventListener('click', function (e) {
      const dropdown = this.querySelector('.dropdown');
      if (dropdown) {
        e.preventDefault(); // Prevent link from being followed
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
    });
  });

  // Close dropdowns and navbar if clicked outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar-container')) {
      navbar.style.display = 'none';
      document.querySelectorAll('.dropdown').forEach((dropdown) => {
        dropdown.style.display = 'none';
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const navItems = document.querySelectorAll('.navbar ul > li');

  navItems.forEach(item => {
    const submenu = item.querySelector('ul');

    if (submenu) {
      item.addEventListener('click', function (e) {
        // منع الرابط من التحميل
        e.preventDefault();

        // غلق جميع القوائم الفرعية الأخرى عند فتح واحدة
        navItems.forEach(i => {
          if (i !== item) {
            const otherSubmenu = i.querySelector('ul');
            if (otherSubmenu) otherSubmenu.style.display = 'none';
          }
        });

        // تبديل العرض
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      });
    }
  });

  // إغلاق القوائم عند النقر خارجها
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.navbar')) {
      navItems.forEach(item => {
        const submenu = item.querySelector('ul');
        if (submenu) submenu.style.display = 'none';
      });
    }
  });
});

// Tooltip Functions
function showTooltip(id) {
  document.getElementById(id).style.display = 'block';
}

function hideTooltip(id) {
  document.getElementById(id).style.display = 'none';
}

// Toggle Search Modal
function toggleSearchModal() {
  const searchModal = document.getElementById('searchModal');
  searchModal.style.display = searchModal.style.display === 'block' ? 'none' : 'block';
}

// Toggle Sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}

// Update Cart Counter
let cartCount = 0;
function addToCart() {
  cartCount++;
  document.getElementById('cartCounter').textContent = cartCount;
}
// first div 
// Array of image sources
const images = [
  './asest/IMAGE/firstdiv/first.png',
  './asest/IMAGE/firstdiv/second.png', // Add more images as needed
];

let currentImageIndex = 0;

// Function to change image every 4 seconds
function changeImage() {
  const imageElement = document.getElementById("jewelryImage");
  currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
  imageElement.src = images[currentImageIndex];
}

// Set interval to change image every 4 seconds (4000 milliseconds)
setInterval(changeImage, 4000);

// Button actions
function buyNow() {
  alert("Redirecting to Buy Now page.");
}

function exploreNow() {
  alert("Redirecting to Explore Now page.");
}
//div3
// إنشاء القسم الرئيسي الجديد (main-section)
const mainSection = document.createElement('div');
mainSection.classList.add('main-section');
document.body.appendChild(mainSection);

// الجزء الأيسر الجديد (4 عناصر - 2 أيقونات و2 صور)
const leftPanel = document.createElement('div');
leftPanel.classList.add('left-panel');
mainSection.appendChild(leftPanel);

// بيانات العناصر الأربعة في الجزء الأيسر
const leftPanelItems = [
  { type: 'icon', icon: 'fa-solid fa-gem', title: 'New Rings Lorem', text: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.' },
  { type: 'image', src: './asest/IMAGE/thirddiv/1.png' },
  { type: 'image', src: './asest/IMAGE/thirddiv/2.png' },
  { type: 'icon', icon: 'fas fa-ring', title: 'Weeding Collections Lorem', text: 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.' },
];

// إنشاء عناصر الجزء الأيسر
leftPanelItems.forEach(item => {
  const leftElement = document.createElement('div');
  leftElement.classList.add('left-element');

  if (item.type === 'icon') {
    leftElement.classList.add('icon-element');
    const icon = document.createElement('i');
    icon.className = item.icon;
    const title = document.createElement('h3');
    title.textContent = item.title;
    title.classList.add('left-title'); // إضافة فئة خاصة بالعنوان
    const text = document.createElement('p');
    text.textContent = item.text;
    text.classList.add('left-text'); // إضافة فئة خاصة بالفقرة
    leftElement.appendChild(icon);
    leftElement.appendChild(title);
    leftElement.appendChild(text);
  } else if (item.type === 'image') {
    leftElement.classList.add('image-element');
    const image = document.createElement('img');
    image.src = item.src;
    image.alt = item.text || '';
    leftElement.appendChild(image);
  }

  leftPanel.appendChild(leftElement);
});

// الجزء الأيمن (صورة كبيرة مع نص وزر فوقها)
const rightPanel = document.createElement('div');
rightPanel.classList.add('right-panel');
mainSection.appendChild(rightPanel);

const rightImageBox = document.createElement('div');
rightImageBox.classList.add('right-image-box');
rightPanel.appendChild(rightImageBox);

const mainImage = document.createElement('img');
mainImage.src = './asest/IMAGE/thirddiv/big.png';
mainImage.alt = 'Main Image';
rightImageBox.appendChild(mainImage);

const overlayBox = document.createElement('div');
overlayBox.classList.add('overlay-box');
rightImageBox.appendChild(overlayBox);

const overlayTitle = document.createElement('h2');
overlayTitle.textContent = 'Crafting Jewellery Since 1990.';
overlayBox.appendChild(overlayTitle);

const overlayDescription = document.createElement('p');
overlayDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';
overlayBox.appendChild(overlayDescription);
// إنشاء الزر
const overlayButton = document.createElement('button');
overlayButton.textContent = 'Know More';

// إضافة الزر إلى الـ overlayBox
overlayBox.appendChild(overlayButton);
// إضافة حدث الضغط على الزر
overlayButton.addEventListener('click', function () {
  window.location.href = 'contact.html'; // التوجيه إلى صفحة contact.html
});


// الزر للعودة لأول الصفحة 
document.addEventListener("DOMContentLoaded", function () {
  // إنشاء الزر الخاص بالرجوع للأعلى
  const backToTopButton = document.createElement("button");
  backToTopButton.classList.add("back-to-top-button");

  // إضافة الأيقونة والنص داخل الزر
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-arrow-up"); // استخدام أيقونة السهم للأعلى
  const text = document.createElement("span");
  text.textContent = "Back to Up";

  // إضافة الأيقونة والنص إلى الزر
  backToTopButton.appendChild(icon);
  backToTopButton.appendChild(text);

  document.body.appendChild(backToTopButton);

  // إظهار الزر عند التمرير لأسفل
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.style.display = "flex";  // إظهار الزر بشكل مرن
    } else {
      backToTopButton.style.display = "none"; // إخفاء الزر
    }
  });

  // عند النقر على الزر، العودة إلى أعلى الصفحة
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

// view more 
document.addEventListener('DOMContentLoaded', function () {
  // بداية القسم الجديد
  const customSection = document.createElement('div');
  customSection.classList.add('custom-section');

  // الصف الأول: خط متقطع مع أيقونة في المنتصف
  const lineWithIcon = document.createElement('div');
  lineWithIcon.classList.add('line-with-icon');
  customSection.appendChild(lineWithIcon);

  const leftLine = document.createElement('div');
  leftLine.classList.add('line');
  lineWithIcon.appendChild(leftLine);

  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gem');
  lineWithIcon.appendChild(icon);

  const rightLine = document.createElement('div');
  rightLine.classList.add('line');
  lineWithIcon.appendChild(rightLine);

  // فقرة تحت الخط المتقطع
  const offerText = document.createElement('p');
  offerText.classList.add('offer-text');
  offerText.textContent = 'Avail Our Offers';
  customSection.appendChild(offerText);

  // الصف الثاني: عنوان "Trending Collection"
  const trendingTitle = document.createElement('h2');
  trendingTitle.classList.add('trending-title');
  trendingTitle.textContent = 'Trending Collection';
  customSection.appendChild(trendingTitle);

  // الصف الثالث: أيقونة السهم وكلمة "View more"
  const viewMoreDiv = document.createElement('div');
  viewMoreDiv.classList.add('view-more');
  customSection.appendChild(viewMoreDiv);

  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fas', 'fa-arrow-right');
  viewMoreDiv.appendChild(arrowIcon);

  const viewMoreText = document.createElement('span');
  viewMoreText.classList.add('view-more-text');
  viewMoreText.textContent = 'View more';
  viewMoreDiv.appendChild(viewMoreText);

  // إضافة تأثير الماوس
  viewMoreText.addEventListener('mouseover', function () {
    viewMoreText.style.color = 'gold';
  });

  viewMoreText.addEventListener('mouseout', function () {
    viewMoreText.style.color = 'white';
  });

  // عند النقر على النص
  viewMoreDiv.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // تحديد الفوتر وإضافته قبل الفوتر
  const footer = document.querySelector('.footer'); // تحديد الفوتر
  document.body.insertBefore(customSection, footer); // إضافة القسم قبل الفوتر
});

// div image & price 
document.addEventListener('DOMContentLoaded', function () {
  // بداية القسم الجديد
  const newSection2 = document.createElement('div');
  newSection2.classList.add('custom-section-2');

  // الصف الذي يحتوي على 4 أجزاء بجانب بعضها البعض
  const row = document.createElement('div');
  row.classList.add('row');
  newSection2.appendChild(row);

  // تفاصيل المنتجات مع الأزرار المختلفة والصور
  const productDetails = [
    {
      title: "Engagement Ring",
      description: "Lorem ipsum dolor sit",
      price: "£500.00",
      buttonText: "Calier",
      image: "./asest/IMAGE/fourdiv/1.png" // مسار الصورة
    },
    {
      title: "Luxury Pearls",
      description: "Indulge in the elegance",
      price: "£400.00 – £8,979.00",
      buttonText: "GUCCI",
      image: "./asest/IMAGE/fourdiv/2.png" // مسار الصورة
    },
    {
      title: "Diamond Ring",
      description: "Shop premier diamond jewelry",
      price: "£547.25",
      oldPrice: "£547.25",
      buttonText: "Cartier",
      image: "./asest/IMAGE/fourdiv/3.png" // مسار الصورة
    },
    {
      title: "Silver Pendant",
      description: "Explore our stunning collection",
      price: "£300.00 – £1,299.00",
      buttonText: "Dior",
      image: "./asest/IMAGE/fourdiv/4.png"
    }
  ];

  for (let i = 0; i < 4; i++) {
    const part = document.createElement('div');
    part.classList.add('part');
    row.appendChild(part);

    // إضافة الصورة من تفاصيل المنتج
    const image = document.createElement('img');
    image.classList.add('part-image');
    image.src = productDetails[i].image; // استخدام مسار الصورة من التفاصيل
    part.appendChild(image);

    // الأيقونات (قلب، عين، تحديث)
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');
    part.appendChild(iconsContainer);

    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fas', 'fa-heart');
    iconsContainer.appendChild(heartIcon);

    const eyeIcon = document.createElement('i');
    eyeIcon.classList.add('fas', 'fa-eye');
    iconsContainer.appendChild(eyeIcon);

    const refreshIcon = document.createElement('i');
    refreshIcon.classList.add('fas', 'fa-sync-alt');
    iconsContainer.appendChild(refreshIcon);

    // زر أسفل الصورة
    const button = document.createElement('button');
    button.classList.add('buy-button');
    button.textContent = productDetails[i].buttonText; // نص الزر مخصص
    part.appendChild(button);

    // العنوان والفقرة تحت الصورة مع تخصيص النصوص
    const title = document.createElement('h3');
    title.classList.add('part-title');
    title.textContent = productDetails[i].title; // عنوان مخصص
    part.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('part-description');
    description.textContent = productDetails[i].description; // فقرة مخصصة
    part.appendChild(description);

    // السعر
    const price = document.createElement('p');
    price.classList.add('part-price');
    price.textContent = productDetails[i].price;
    part.appendChild(price);

    // إذا كانت هذه هي الجزء الثالث، نضيف السعر المشطوب
    if (i === 2 && productDetails[i].oldPrice) {
      const oldPrice = document.createElement('p');
      oldPrice.classList.add('old-price');
      oldPrice.textContent = `Original price was: ${productDetails[i].oldPrice}`; // السعر القديم
      part.appendChild(oldPrice);
    }
  }

  // إضافة القسم إلى الصفحة
  const footer = document.querySelector('.footer'); // تحديد الفوتر
  document.body.insertBefore(newSection2, footer); // إضافة القسم قبل الفوتر
});
// image & cover 
document.addEventListener('DOMContentLoaded', function () {
  // إنشاء القسم الجديد
  const newSection3 = document.createElement('div');
  newSection3.classList.add('custom-section-3');

  // تفاصيل الصور والعناوين
  const galleryItems = [
    { title: "Anklets", imagePath: "./asest/IMAGE/div5/1.png" },
    { title: "Armlets", imagePath: "./asest/IMAGE/div5/2.png" },
    { title: "Bracelets", imagePath: "./asest/IMAGE/div5/3.png" },
    { title: "Earrings", imagePath: "./asest/IMAGE/div5/4.png" }
  ];

  galleryItems.forEach(item => {
    // إنشاء عنصر يحتوي على الصورة والتفاصيل
    const galleryBox = document.createElement('div');
    galleryBox.classList.add('gallery-box');

    // إنشاء عنصر الصورة
    const productImage = document.createElement('img');
    productImage.classList.add('product-image');
    productImage.src = item.imagePath;
    galleryBox.appendChild(productImage);

    // إضافة طبقة التغطية الذهبية
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    galleryBox.appendChild(overlay);

    // إضافة العنوان فوق الصورة
    const title = document.createElement('h2');
    title.classList.add('image-title');
    title.textContent = item.title;
    galleryBox.appendChild(title);

    // إضافة وصف بسيط عند التأشير
    const description = document.createElement('p');
    description.classList.add('image-description');
    description.textContent = "Lorem ipsum dolor sit amet, consectetur";
    galleryBox.appendChild(description);

    // إضافة خيار "Buy Now" بجانب السهم
    const buyNowContainer = document.createElement('div');
    buyNowContainer.classList.add('buy-now-container');
    const buyNowIcon = document.createElement('i');
    buyNowIcon.classList.add('fas', 'fa-arrow-right');
    buyNowContainer.appendChild(buyNowIcon);
    const buyNowText = document.createElement('span');
    buyNowText.textContent = "Buy Now";
    buyNowContainer.appendChild(buyNowText);
    galleryBox.appendChild(buyNowContainer);

    // إضافة الزر "View Products"
    const button = document.createElement('button');
    button.classList.add('view-button');
    button.textContent = "View Products";
    galleryBox.appendChild(button);

    newSection3.appendChild(galleryBox);
  });

  // إضافة القسم الجديد إلى الصفحة قبل الفوتر
  const footer = document.querySelector('.footer');
  document.body.insertBefore(newSection3, footer);
});


// shop now 
document.addEventListener('DOMContentLoaded', function () {
  // إنشاء القسم الجديد
  const newSection4 = document.createElement('div');
  newSection4.classList.add('shop-custom-section-4');

  // تفاصيل المحتوى مع النصوص والصورة
  const contentDetails = [
    {
      header: "BUY NOW",
      title: "Rare Collections",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat you have to understand this.",
      buttonText: "Shop Now",
      image: "./asest/IMAGE/div6/1.png"
    }
  ];

  contentDetails.forEach(detail => {
    // إنشاء هيكل القسم
    const sectionBox = document.createElement('div');
    sectionBox.classList.add('shop-section-box');
    newSection4.appendChild(sectionBox);

    // إنشاء جزء النص
    const textBox = document.createElement('div');
    textBox.classList.add('shop-text-box');
    sectionBox.appendChild(textBox);

    // إضافة النصوص
    const smallText = document.createElement('p');
    smallText.classList.add('shop-small-text');
    smallText.textContent = detail.header;
    textBox.appendChild(smallText);

    const mainTitle = document.createElement('h2');
    mainTitle.classList.add('shop-main-title');
    mainTitle.textContent = detail.title;
    textBox.appendChild(mainTitle);

    const description = document.createElement('p');
    description.classList.add('shop-description-text');
    description.textContent = detail.description;
    textBox.appendChild(description);

    // إضافة الزر
    const button = document.createElement('button');
    button.classList.add('shop-cta-button');
    button.textContent = detail.buttonText;
    textBox.appendChild(button);

    // إضافة جزء الصورة
    const imageBox = document.createElement('div');
    imageBox.classList.add('shop-image-box');
    sectionBox.appendChild(imageBox);

    const image = document.createElement('img');
    image.classList.add('shop-side-image');
    image.src = detail.image;
    imageBox.appendChild(image);
  });

  // إضافة القسم إلى الصفحة
  const footer = document.querySelector('.footer');
  document.body.insertBefore(newSection4, footer);
});

// jewellery list  
document.addEventListener('DOMContentLoaded', function () {
  // إنشاء الحاوية الرئيسية
  const shopGalleryShowForUser = document.createElement('div');
  shopGalleryShowForUser.classList.add('shop-gallery-show-forUser');


  // إنشاء السهم الأيسر
  const leftArrowContainerShowForUser = document.createElement('div');
  leftArrowContainerShowForUser.classList.add('arrow-container-show-forUser');
  const leftArrowShow = document.createElement('button');
  leftArrowShow.classList.add('arrow-left-show-forUser');
  leftArrowShow.textContent = '←';
  leftArrowContainerShowForUser.appendChild(leftArrowShow);

  // إنشاء حاوية الصور
  const shopImagesContainerShow = document.createElement('div');
  shopImagesContainerShow.classList.add('shop-images-container-show-forUser');

  // إضافة الصور إلى الحاوية
  const images = Array.from({ length: 13 }, (_, i) => `./asest/IMAGE/list/${i + 1}.png`);

  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product Image';
    img.classList.add('shop-image-show-forUser');
    shopImagesContainerShow.appendChild(img);
  });

  // إضافة السهم الأيمن
  const rightArrowContainerShowForUser = document.createElement('div');
  rightArrowContainerShowForUser.classList.add('arrow-container-show-forUser');
  const rightArrowShow = document.createElement('button');
  rightArrowShow.classList.add('arrow-right-show-forUser');
  rightArrowShow.textContent = '→';
  rightArrowContainerShowForUser.appendChild(rightArrowShow);

  // إضافة السهمين وحاوية الصور إلى الحاوية الرئيسية
  shopGalleryShowForUser.appendChild(leftArrowContainerShowForUser);
  shopGalleryShowForUser.appendChild(shopImagesContainerShow);
  shopGalleryShowForUser.appendChild(rightArrowContainerShowForUser);

  // إضافة الفقرة الجانبية
  const sideContentContainerShow = document.createElement('div');
  sideContentContainerShow.classList.add('side-content-container-show-forUser');

  // العنوان الجانبي "Buy Now"
  const buyNowTitle = document.createElement('h3');
  buyNowTitle.textContent = 'Buy Now';
  buyNowTitle.classList.add('buy-now-title-show');
  sideContentContainerShow.appendChild(buyNowTitle);

  // العنوان "Bestselling Products"
  const bestsellingTitle = document.createElement('h2');
  bestsellingTitle.textContent = 'Bestselling Products';
  bestsellingTitle.classList.add('bestselling-title-show');
  sideContentContainerShow.appendChild(bestsellingTitle);

  // الفقرة النصية
  const descriptionText = document.createElement('p');
  descriptionText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, aliquip ex ea commodo consequat you have to understand this.';
  descriptionText.classList.add('description-text-show');
  sideContentContainerShow.appendChild(descriptionText);

  // زر "shop now"
  const shopNowButton = document.createElement('button');
  shopNowButton.textContent = 'shop now';
  shopNowButton.classList.add('shop-now-button-show');
  sideContentContainerShow.appendChild(shopNowButton);


  // إضافة الفقرة الجانبية إلى الحاوية الرئيسية
  shopGalleryShowForUser.appendChild(sideContentContainerShow);

  // الحصول على الفوتر
  const footerShow = document.querySelector('.footer');

  // إضافة القسم إلى الصفحة قبل الفوتر
  document.body.insertBefore(shopGalleryShowForUser, footerShow);

  // ضبط بداية عرض الصور
  let currentIndex = 0;

  function showImages() {
    const imageElements = shopImagesContainerShow.querySelectorAll('.shop-image-show-forUser');
    imageElements.forEach((image, index) => {
      if (index >= currentIndex && index < currentIndex + 4) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  // إظهار الصور الأولية
  showImages();

  // حدث الضغط على السهم الأيمن
  rightArrowShow.addEventListener('click', () => {
    if (currentIndex < images.length - 4) {
      currentIndex++;
    } else {
      currentIndex = 0; // العودة للبداية
    }
    showImages();
  });

  // حدث الضغط على السهم الأيسر
  leftArrowShow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 4; // الذهاب للنهاية
    }
    showImages();
  });
});

// up do not work
// gatogery 
document.addEventListener('DOMContentLoaded', function () {
  // إنشاء القسم الجديد
  const ourGatogerySection = document.createElement('div');
  ourGatogerySection.classList.add('ourGatogery-categories-section');

  // الصف الأول: النصوص
  const categoryInfo = document.createElement('div');
  categoryInfo.classList.add('ourGatogery-category-info');
  ourGatogerySection.appendChild(categoryInfo);

  const smallText = document.createElement('p');
  smallText.classList.add('ourGatogery-small-text');
  smallText.textContent = 'Categories';
  categoryInfo.appendChild(smallText);

  const bigText = document.createElement('h2');
  bigText.classList.add('ourGatogery-big-text');
  bigText.textContent = 'Our Categories';
  categoryInfo.appendChild(bigText);

  // الصف الثاني: صور التفاعل
  const iconsRow = document.createElement('div');
  iconsRow.classList.add('ourGatogery-icons-row');
  ourGatogerySection.appendChild(iconsRow);

  const iconImages = [
    './asest/IMAGE/gatogery/1.png',
    './asest/IMAGE/gatogery/2.png',
    './asest/IMAGE/gatogery/3.png',
    './asest/IMAGE/gatogery/4.png',
    './asest/IMAGE/gatogery/5.png',
    './asest/IMAGE/gatogery/6.png',
  ];

  iconImages.forEach((src, index) => {
    const iconWrapper = document.createElement('div');
    iconWrapper.classList.add('ourGatogery-icon-wrapper');
    if (index === 0) iconWrapper.classList.add('golden'); // أول صورة باللون الذهبي

    const icon = document.createElement('img');
    icon.src = src;
    icon.alt = `Category Icon ${index + 1}`;
    icon.classList.add('ourGatogery-icon');
    iconWrapper.appendChild(icon);
    iconsRow.appendChild(iconWrapper);
  });

  // الصف الثالث والرابع: صور المنتجات مع النجوم، الزر، والأيقونات
  for (let i = 0; i < 2; i++) {
    const productsRow = document.createElement('div');
    productsRow.classList.add('ourGatogery-products-row');
    ourGatogerySection.appendChild(productsRow);

    const productDetails = [
      { title: "Engagement Ring", price: "£500.00", image: `./asest/IMAGE/gatogery/${i + 1}.png`, type: "Ring" },
      { title: "Luxury Pearls", price: "£400.00 – £8,979.00", image: `./asest/IMAGE/gatogery/${i + 2}.png`, type: "Pearls" },
      { title: "Diamond Ring", price: "£547.25", image: `./asest/IMAGE/gatogery/${i + 3}.png`, type: "Ring" },
      { title: "Silver Pendant", price: "£300.00 – £1,299.00", image: `./asest/IMAGE/gatogery/${i + 4}.png`, type: "Pendant" },
    ];

    // استخدام productDetails داخل الحلقة لتكرار العناصر
    productDetails.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('ourGatogery-card');
      productsRow.appendChild(productCard);

      // الصورة
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.title;
      productImage.classList.add('ourGatogery-product-image');
      productCard.appendChild(productImage);

      // أيقونات العمود (عين، قلب، تحديث)
      const iconsColumn = document.createElement('div');
      iconsColumn.classList.add('ourGatogery-icons-column');
      productCard.appendChild(iconsColumn);

      const iconClasses = ['fa-eye', 'fa-heart', 'fa-sync-alt'];
      iconClasses.forEach((iconClass) => {
        const icon = document.createElement('i');
        icon.classList.add('fas', iconClass, 'ourGatogery-icon');
        iconsColumn.appendChild(icon);
      });

      // النجوم الذهبية
      const starsContainer = document.createElement('div');
      starsContainer.classList.add('ourGatogery-stars');
      for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star', 'ourGatogery-star');
        starsContainer.appendChild(star);
      }
      productCard.appendChild(starsContainer);

      // الزر العلوي لنوع المجوهرات
      const jewelryButton = document.createElement('button');
      jewelryButton.classList.add('ourGatogery-jewelry-button');
      jewelryButton.textContent = product.type;
      productCard.appendChild(jewelryButton);

      // العنوان
      const productTitle = document.createElement('h3');
      productTitle.classList.add('ourGatogery-product-title');
      productTitle.textContent = product.title;
      productCard.appendChild(productTitle);

      // السعر
      const productPrice = document.createElement('p');
      productPrice.classList.add('ourGatogery-product-price');
      productPrice.textContent = product.price;
      productCard.appendChild(productPrice);
    });
  }

  // إضافة القسم قبل الفوتر
  const footer = document.querySelector('.footer');
  document.body.insertBefore(ourGatogerySection, footer);
});

// handpacket
document.addEventListener('DOMContentLoaded', function () {
  const newCollectionSection = document.createElement('div');
  newCollectionSection.classList.add('new-collection-section');

  // الصف الأول: الخط المتصل مع الجوهرة بالمنتصف
  const lineWithIconContainer = document.createElement('div');
  lineWithIconContainer.classList.add('line-with-icon-container');
  newCollectionSection.appendChild(lineWithIconContainer);

  const leftLine = document.createElement('div');
  leftLine.classList.add('line');
  lineWithIconContainer.appendChild(leftLine);

  const gemIcon = document.createElement('i');
  gemIcon.classList.add('fas', 'fa-gem', 'gem-icon');
  lineWithIconContainer.appendChild(gemIcon);

  const rightLine = document.createElement('div');
  rightLine.classList.add('line');
  lineWithIconContainer.appendChild(rightLine);

  // الصف الأول: النصوص
  const headerContainer = document.createElement('div');
  headerContainer.classList.add('new-collection-header');
  newCollectionSection.appendChild(headerContainer);

  const titleSmall = document.createElement('p');
  titleSmall.classList.add('new-collection-small-title');
  titleSmall.textContent = 'New Collection';
  headerContainer.appendChild(titleSmall);

  const titleBig = document.createElement('h1');
  titleBig.classList.add('new-collection-big-title');
  titleBig.textContent = 'Handpicked Products';
  headerContainer.appendChild(titleBig);

  // الصف الثاني: المحتوى (ثلاثة أجزاء)
  const rowContainer = document.createElement('div');
  rowContainer.classList.add('new-collection-row');
  newCollectionSection.appendChild(rowContainer);

  const items = [
    {
      title: 'Anklets',
      icon: './asest/IMAGE/handpacked/4.png', // أيقونة الجوهرة
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './asest/IMAGE/handpacked/1.png', // صورة المنتج
    },
    {
      title: 'Armlets',
      icon: './asest/IMAGE/handpacked/5.png', // أيقونة السلسلة
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './asest/IMAGE/handpacked/2.png', // صورة المنتج
    },
    {
      title: 'Bracelets',
      icon: './asest/IMAGE/handpacked/6.png', // أيقونة الجوهرة
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: './asest/IMAGE/handpacked/3.png', // صورة المنتج
    },
  ];

  items.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('new-collection-item');

    const itemImage = document.createElement('img');
    itemImage.src = item.image;
    itemImage.alt = item.title;
    itemImage.classList.add('new-collection-item-image');
    itemContainer.appendChild(itemImage);

    const itemIcon = document.createElement('img');
    itemIcon.src = item.icon;
    itemIcon.alt = `${item.title} Icon`;
    itemIcon.classList.add('new-collection-item-icon');
    itemContainer.appendChild(itemIcon);

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('new-collection-item-title');
    itemTitle.textContent = item.title;
    itemContainer.appendChild(itemTitle);

    const itemDescription = document.createElement('p');
    itemDescription.classList.add('new-collection-item-description');
    itemDescription.textContent = item.description;
    itemContainer.appendChild(itemDescription);

    rowContainer.appendChild(itemContainer);
  });

  // إضافة القسم قبل الفوتر
  const footer = document.querySelector('.footer');
  document.body.insertBefore(newCollectionSection, footer);
});

 
// our product 
document.addEventListener('DOMContentLoaded', function () {
  // بداية القسم الجديد
  const ourProductCustomSection = document.createElement('div');
  ourProductCustomSection.classList.add('ourProduct-custom-section');

  // الصف الأول: خط متقطع مع أيقونة في المنتصف
  const ourProductLineWithIcon = document.createElement('div');
  ourProductLineWithIcon.classList.add('ourProduct-line-with-icon');
  ourProductCustomSection.appendChild(ourProductLineWithIcon);

  const ourProductLeftLine = document.createElement('div');
  ourProductLeftLine.classList.add('ourProduct-line');
  ourProductLineWithIcon.appendChild(ourProductLeftLine);

  const ourProductIcon = document.createElement('i');
  ourProductIcon.classList.add('fas', 'fa-gem');
  ourProductLineWithIcon.appendChild(ourProductIcon);

  const ourProductRightLine = document.createElement('div');
  ourProductRightLine.classList.add('ourProduct-line');
  ourProductLineWithIcon.appendChild(ourProductRightLine);

  // فقرة تحت الخط المتقطع
  const ourProductOfferText = document.createElement('p');
  ourProductOfferText.classList.add('ourProduct-offer-text');
  ourProductOfferText.textContent = 'Avail Our Offers';
  ourProductCustomSection.appendChild(ourProductOfferText);

  // الصف الثاني: عنوان "Trending Collection"
  const ourProductTrendingTitle = document.createElement('h2');
  ourProductTrendingTitle.classList.add('ourProduct-trending-title');
  ourProductTrendingTitle.textContent = 'Our Products';
  ourProductCustomSection.appendChild(ourProductTrendingTitle);

  const ourProductViewMoreDiv = document.createElement('div');
  ourProductViewMoreDiv.classList.add('ourProduct-view-more');
  ourProductCustomSection.appendChild(ourProductViewMoreDiv);

  const ourProductArrowIcon = document.createElement('i');
  ourProductArrowIcon.classList.add('fas', 'fa-arrow-right');
  ourProductViewMoreDiv.appendChild(ourProductArrowIcon);

  const ourProductViewMoreText = document.createElement('span');
  ourProductViewMoreText.classList.add('ourProduct-view-more-text');
  ourProductViewMoreText.textContent = 'View more';
  ourProductViewMoreDiv.appendChild(ourProductViewMoreText);

  // إضافة تأثير الماوس
  ourProductViewMoreText.addEventListener('mouseover', function () {
    ourProductViewMoreText.style.color = 'gold';
  });

  ourProductViewMoreText.addEventListener('mouseout', function () {
    ourProductViewMoreText.style.color = 'white';
  });

  // عند النقر على النص
  ourProductViewMoreDiv.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // تحديد الفوتر وإضافته قبل الفوتر
  const ourProductFooter = document.querySelector('.footer'); // تحديد الفوتر
  document.body.insertBefore(ourProductCustomSection, ourProductFooter); // إضافة القسم قبل الفوتر
});


// div image & price 
document.addEventListener('DOMContentLoaded', function () {
  // بداية القسم الجديد
  const ourProductNewSection = document.createElement('div');
  ourProductNewSection.classList.add('ourProduct-custom-section-2');

  // الصف الذي يحتوي على 4 أجزاء بجانب بعضها البعض
  const ourProductRow = document.createElement('div');
  ourProductRow.classList.add('ourProduct-row');
  ourProductNewSection.appendChild(ourProductRow);

  // تفاصيل المنتجات مع الأزرار المختلفة والصور
  const ourProductDetails = [
    {
      title: "Engagement Ring",
      description: "Lorem ipsum dolor sit",
      price: "£500.00",
      buttonText: "Calier",
      image: "./asest/IMAGE/fourdiv/1.png" // مسار الصورة
    },
    {
      title: "Luxury Pearls",
      description: "Indulge in the elegance",
      price: "£400.00 – £8,979.00",
      buttonText: "GUCCI",
      image: "./asest/IMAGE/fourdiv/2.png" // مسار الصورة
    },
    {
      title: "Diamond Ring",
      description: "Shop premier diamond jewelry",
      price: "£547.25",
      oldPrice: "£547.25",
      buttonText: "Cartier",
      image: "./asest/IMAGE/fourdiv/3.png" // مسار الصورة
    },
    {
      title: "Silver Pendant",
      description: "Explore our stunning collection",
      price: "£300.00 – £1,299.00",
      buttonText: "Dior",
      image: "./asest/IMAGE/fourdiv/4.png"
    }
  ];

  for (let i = 0; i < 4; i++) {
    const ourProductPart = document.createElement('div');
    ourProductPart.classList.add('ourProduct-part');
    ourProductRow.appendChild(ourProductPart);

    // إضافة الصورة من تفاصيل المنتج
    const ourProductImage = document.createElement('img');
    ourProductImage.classList.add('ourProduct-part-image');
    ourProductImage.src = ourProductDetails[i].image; // استخدام مسار الصورة من التفاصيل
    ourProductPart.appendChild(ourProductImage);

    // الأيقونات (قلب، عين، تحديث)
    const ourProductIconsContainer = document.createElement('div');
    ourProductIconsContainer.classList.add('ourProduct-icons-container');
    ourProductPart.appendChild(ourProductIconsContainer);

    const ourProductHeartIcon = document.createElement('i');
    ourProductHeartIcon.classList.add('fas', 'fa-heart');
    ourProductIconsContainer.appendChild(ourProductHeartIcon);

    const ourProductEyeIcon = document.createElement('i');
    ourProductEyeIcon.classList.add('fas', 'fa-eye');
    ourProductIconsContainer.appendChild(ourProductEyeIcon);

    const ourProductRefreshIcon = document.createElement('i');
    ourProductRefreshIcon.classList.add('fas', 'fa-sync-alt');
    ourProductIconsContainer.appendChild(ourProductRefreshIcon);

    // زر أسفل الصورة
    const ourProductButton = document.createElement('button');
    ourProductButton.classList.add('ourProduct-buy-button');
    ourProductButton.textContent = ourProductDetails[i].buttonText; // نص الزر مخصص
    ourProductPart.appendChild(ourProductButton);

    // العنوان والفقرة تحت الصورة مع تخصيص النصوص
    const ourProductTitle = document.createElement('h3');
    ourProductTitle.classList.add('ourProduct-part-title');
    ourProductTitle.textContent = ourProductDetails[i].title; // عنوان مخصص
    ourProductPart.appendChild(ourProductTitle);

    const ourProductDescription = document.createElement('p');
    ourProductDescription.classList.add('ourProduct-part-description');
    ourProductDescription.textContent = ourProductDetails[i].description; // فقرة مخصصة
    ourProductPart.appendChild(ourProductDescription);

    // السعر
    const ourProductPrice = document.createElement('p');
    ourProductPrice.classList.add('ourProduct-part-price');
    ourProductPrice.textContent = ourProductDetails[i].price;
    ourProductPart.appendChild(ourProductPrice);

    // إذا كانت هذه هي الجزء الثالث، نضيف السعر المشطوب
    if (i === 2 && ourProductDetails[i].oldPrice) {
      const ourProductOldPrice = document.createElement('p');
      ourProductOldPrice.classList.add('ourProduct-old-price');
      ourProductOldPrice.textContent = `Original price was: ${ourProductDetails[i].oldPrice}`; // السعر القديم
      ourProductPart.appendChild(ourProductOldPrice);
    }
  }

  // إضافة القسم إلى الصفحة
  const ourProductFooter = document.querySelector('.footer'); // تحديد الفوتر
  document.body.insertBefore(ourProductNewSection, ourProductFooter); // إضافة القسم قبل الفوتر
});

// sale product 

document.addEventListener('DOMContentLoaded', function () {
  // بداية القسم الجديد
  const saleCustomSection = document.createElement('div');
  saleCustomSection.classList.add('sale-custom-section');

  // الصف الأول: خط متقطع مع أيقونة في المنتصف
  const saleLineWithIcon = document.createElement('div');
  saleLineWithIcon.classList.add('sale-line-with-icon');
  saleCustomSection.appendChild(saleLineWithIcon);

  const saleLeftLine = document.createElement('div');
  saleLeftLine.classList.add('sale-line');
  saleLineWithIcon.appendChild(saleLeftLine);

  const saleIcon = document.createElement('i');
  saleIcon.classList.add('fas', 'fa-gem');
  saleLineWithIcon.appendChild(saleIcon);

  const saleRightLine = document.createElement('div');
  saleRightLine.classList.add('sale-line');
  saleLineWithIcon.appendChild(saleRightLine);

  // فقرة تحت الخط المتقطع
  const saleOfferText = document.createElement('p');
  saleOfferText.classList.add('sale-offer-text');
  saleOfferText.textContent = 'Discover Our Sales';
  saleCustomSection.appendChild(saleOfferText);

  // الصف الثاني: عنوان "Exclusive Sale Collection"
  const saleTrendingTitle = document.createElement('h2');
  saleTrendingTitle.classList.add('sale-trending-title');
  saleTrendingTitle.textContent = 'Exclusive Sale Collection';
  saleCustomSection.appendChild(saleTrendingTitle);

  // الصف الثالث: الصور مع النجوم وكلمة Sale
  const saleImageGrid = document.createElement('div');
  saleImageGrid.classList.add('sale-image-grid');
  saleCustomSection.appendChild(saleImageGrid);

  const saleItems = [
    { image: './asest/IMAGE/sale/1.png', discount: '-13.7% OFF' },
    { image: './asest/IMAGE/sale/2.png', discount: '-18% OFF' },
    { image: './asest/IMAGE/sale/3.png', discount: '-13.4% OFF' },
  ];

  saleItems.forEach(item => {
    const saleItemBox = document.createElement('div');
    saleItemBox.classList.add('sale-item-box');
    saleImageGrid.appendChild(saleItemBox);

    // النجوم الذهبية
    const starsBox = document.createElement('div');
    starsBox.classList.add('sale-stars-box');
    for (let i = 0; i < 5; i++) {
      const star = document.createElement('i');
      star.classList.add('fas', 'fa-star', 'sale-gold-star');
      starsBox.appendChild(star);
    }
    saleItemBox.appendChild(starsBox);

    // الصورة
    const saleImageContainer = document.createElement('div');
    saleImageContainer.classList.add('sale-image-container');
    saleItemBox.appendChild(saleImageContainer);

    const saleImage = document.createElement('img');
    saleImage.src = item.image;
    saleImage.alt = 'Sale Item';
    saleImage.classList.add('sale-image');
    saleImageContainer.appendChild(saleImage);

    // كلمة Sale مع الخصم
    const saleOverlay = document.createElement('div');
    saleOverlay.classList.add('sale-overlay');
    saleImageContainer.appendChild(saleOverlay);

    const saleText = document.createElement('span');
    saleText.classList.add('sale-text');
    saleText.textContent = 'Sale';
    saleOverlay.appendChild(saleText);

    const discountText = document.createElement('span');
    discountText.classList.add('sale-discount-text');
    discountText.textContent = item.discount;
    saleOverlay.appendChild(discountText);
    
  });

  // إضافة القسم إلى الصفحة
  const footer = document.querySelector('.footer');
  document.body.insertBefore(saleCustomSection, footer);
});

// icon like 
document.addEventListener('DOMContentLoaded', function () {
  // إنشاء القسم الجديد
  const statsSection = document.createElement('div');
  statsSection.classList.add('stat-stats-section');

  // تفاصيل المحتوى الخاص بالصف الأول
  const statsDetails = [
    {
      iconClass: 'fa-solid fa-ring', //يقونة الألبوم
      title: '84K +',
      description: 'Jewels in Album',
    },
    {
      iconClass: 'fa-regular fa-thumbs-up', // أيقونة اللايك
      title: '10M +',
      description: 'Happy Feedbacks',
    },
    {
      iconClass: 'fa-solid fa-gem', // أيقونة الجوهرة
      title: '2K +',
      description: 'Categories Served',
    },
    {
      iconClass: 'fa-regular fa-user', // أيقونة المستخدم
      title: '100M +',
      description: 'Happy Clients',
    },
  ];

  // إنشاء حاوية الأيقونات
  const statIconsContainer = document.createElement('div');
  statIconsContainer.classList.add('stat-icons-container');
  statsSection.appendChild(statIconsContainer);

  statsDetails.forEach((stat) => {
    // إنشاء الحاوية لكل أيقونة
    const statBox = document.createElement('div');
    statBox.classList.add('stat-stat-box');

    // الأيقونة
    const statIcon = document.createElement('i');
    statIcon.classList.add(...stat.iconClass.split(' '));
    statIcon.style.color = 'gold'; // اللون الذهبي للأيقونة
    statBox.appendChild(statIcon);

    // العنوان
    const statTitle = document.createElement('h2');
    statTitle.classList.add('stat-stat-title');
    statTitle.textContent = stat.title;
    statBox.appendChild(statTitle);

    // الوصف
    const statDescription = document.createElement('p');
    statDescription.classList.add('stat-stat-description');
    statDescription.textContent = stat.description;
    statBox.appendChild(statDescription);

    // إضافة الحاوية إلى حاوية الأيقونات
    statIconsContainer.appendChild(statBox);
  });

  // إضافة القسم إلى الصفحة
  const footer = document.querySelector('.footer');
  document.body.insertBefore(statsSection, footer);
});

// on sale 
document.addEventListener('DOMContentLoaded', function () {
  // بداية القسم الجديد
  const saleCustomSectionForUser = document.createElement('div');
  saleCustomSectionForUser.classList.add('sale-custom-section-forUser');

  // الصف الأول: خط متقطع مع أيقونة في المنتصف
  const saleLineWithIconForUser = document.createElement('div');
  saleLineWithIconForUser.classList.add('sale-line-with-icon-forUser');
  saleCustomSectionForUser.appendChild(saleLineWithIconForUser);

  const saleLeftLineForUser = document.createElement('div');
  saleLeftLineForUser.classList.add('sale-line-forUser');
  saleLineWithIconForUser.appendChild(saleLeftLineForUser);

  const saleIconForUser = document.createElement('i');
  saleIconForUser.classList.add('fas', 'fa-gem');
  saleLineWithIconForUser.appendChild(saleIconForUser);

  const saleRightLineForUser = document.createElement('div');
  saleRightLineForUser.classList.add('sale-line-forUser');
  saleLineWithIconForUser.appendChild(saleRightLineForUser);

  // فقرة تحت الخط المتقطع
  const saleOfferTextForUser = document.createElement('p');
  saleOfferTextForUser.classList.add('sale-offer-text-forUser');
  saleOfferTextForUser.textContent = 'Discover Our Sales';
  saleCustomSectionForUser.appendChild(saleOfferTextForUser);

  // الصف الثاني: عنوان "Exclusive Sale Collection"
  const saleTrendingTitleForUser = document.createElement('h2');
  saleTrendingTitleForUser.classList.add('sale-trending-title-forUser');
  saleTrendingTitleForUser.textContent = 'Exclusive Sale Collection';
  saleCustomSectionForUser.appendChild(saleTrendingTitleForUser);

  // الصف الثالث: الصور مع النجوم وكلمة Sale
  const saleImageGridForUser = document.createElement('div');
  saleImageGridForUser.classList.add('sale-image-grid-forUser');
  saleCustomSectionForUser.appendChild(saleImageGridForUser);

  const saleItemsForUser = [
    { image: './asest/IMAGE/sale/1.png', discount: '-13.7% OFF' },
    { image: './asest/IMAGE/sale/2.png', discount: '-18% OFF' },
    { image: './asest/IMAGE/sale/3.png', discount: '-13.4% OFF' },
  ];

  saleItemsForUser.forEach(item => {
    const saleItemBoxForUser = document.createElement('div');
    saleItemBoxForUser.classList.add('sale-item-box-forUser');
    saleImageGridForUser.appendChild(saleItemBoxForUser);

    // النجوم الذهبية
    const starsBoxForUser = document.createElement('div');
    starsBoxForUser.classList.add('sale-stars-box-forUser');
    for (let i = 0; i < 5; i++) {
      const starForUser = document.createElement('i');
      starForUser.classList.add('fas', 'fa-star', 'sale-gold-star-forUser');
      starsBoxForUser.appendChild(starForUser);
    }
    saleItemBoxForUser.appendChild(starsBoxForUser);

    // الصورة
    const saleImageContainerForUser = document.createElement('div');
    saleImageContainerForUser.classList.add('sale-image-container-forUser');
    saleItemBoxForUser.appendChild(saleImageContainerForUser);

    const saleImageForUser = document.createElement('img');
    saleImageForUser.src = item.image;
    saleImageForUser.alt = 'Sale Item';
    saleImageForUser.classList.add('sale-image-forUser');
    saleImageContainerForUser.appendChild(saleImageForUser);

    // كلمة Sale مع الخصم
    const saleOverlayForUser = document.createElement('div');
    saleOverlayForUser.classList.add('sale-overlay-forUser');
    saleImageContainerForUser.appendChild(saleOverlayForUser);

    const saleTextForUser = document.createElement('span');
    saleTextForUser.classList.add('sale-text-forUser');
    saleTextForUser.textContent = 'Sale';
    saleOverlayForUser.appendChild(saleTextForUser);

    const discountTextForUser = document.createElement('span');
    discountTextForUser.classList.add('sale-discount-text-forUser');
    discountTextForUser.textContent = item.discount;
    saleOverlayForUser.appendChild(discountTextForUser);
  });

  // قسم الصور في الأسفل
  const saleImageSectionForUser = document.createElement('div');
  saleImageSectionForUser.classList.add('sale-image-section-forUser');
  saleCustomSectionForUser.appendChild(saleImageSectionForUser);

  // الصورة الأولى (الجزء الأيسر)
  const saleLeftImageForUser = document.createElement('img');
  saleLeftImageForUser.classList.add('sale-left-image-forUser');
  saleLeftImageForUser.src = './asest/IMAGE/on sale/1.png'; // وضع مسار الصورة
  saleLeftImageForUser.alt = 'Left Image';
  saleImageSectionForUser.appendChild(saleLeftImageForUser);

  // الصورة الثانية (الجزء الأيمن)
  const saleRightImageSectionForUser = document.createElement('div');
  saleRightImageSectionForUser.classList.add('sale-right-image-section-forUser');
  saleImageSectionForUser.appendChild(saleRightImageSectionForUser);

  const saleRightImageTopForUser = document.createElement('img');
  saleRightImageTopForUser.classList.add('sale-right-image-top-forUser');
  saleRightImageTopForUser.src = './asest/IMAGE/on sale/2.png'; // وضع مسار الصورة
  saleRightImageTopForUser.alt = 'Right Image Top';
  saleRightImageSectionForUser.appendChild(saleRightImageTopForUser);

  const saleRightImageBottomForUser = document.createElement('img');
  saleRightImageBottomForUser.classList.add('sale-right-image-bottom-forUser');
  saleRightImageBottomForUser.src = './asest/IMAGE/on sale/3.png'; // وضع مسار الصورة
  saleRightImageBottomForUser.alt = 'Right Image Bottom';
  saleRightImageSectionForUser.appendChild(saleRightImageBottomForUser);

  // إضافة القسم إلى الصفحة
  const footerForUser = document.querySelector('.footer');
  document.body.insertBefore(saleCustomSectionForUser, footerForUser);
});

// laset 

document.addEventListener('DOMContentLoaded', function () {
  // إنشاء الحاوية الرئيسية
  const shopGalleryForUser = document.createElement('div');
  shopGalleryForUser.classList.add('shop-gallery-forUser');
  
  // إضافة العنوان "SHOP"
  const shopTitle = document.createElement('h1');
  shopTitle.classList.add('shop-title-forUser');
  shopTitle.textContent = 'SHOP';
  shopTitle.style.fontSize = '10px'; // الخط بحجم 10px
  shopTitle.style.color = 'white';  // لون الخط أبيض
  shopGalleryForUser.appendChild(shopTitle);
  
  // إضافة العنوان "Latest Products"
  const latestProductsTitle = document.createElement('h2');
  latestProductsTitle.classList.add('latest-products-title-forUser');
  latestProductsTitle.textContent = 'Latest Products';
  latestProductsTitle.style.fontSize = '30px'; // الخط بحجم 30px
  latestProductsTitle.style.color = 'white';  // لون الخط أبيض
  shopGalleryForUser.appendChild(latestProductsTitle);
  
  // إنشاء السهم الأيسر
  const leftArrowContainerForUser = document.createElement('div');
  leftArrowContainerForUser.classList.add('arrow-container-forUser');
  const leftArrowForUser = document.createElement('button');
  leftArrowForUser.classList.add('arrow-left-forUser');
  leftArrowForUser.textContent = '←';
  leftArrowContainerForUser.appendChild(leftArrowForUser);
  
  // إنشاء حاوية الصور
  const shopImagesContainerForUser = document.createElement('div');
  shopImagesContainerForUser.classList.add('shop-images-container-forUser');
  
  // إضافة الصور إلى الحاوية
  const images = [
    './asest/IMAGE/list/1.png', './asest/IMAGE/list/2.png', './asest/IMAGE/list/3.png', './asest/IMAGE/list/4.png', 
    './asest/IMAGE/list/6.png', './asest/IMAGE/list/8.png', './asest/IMAGE/list/7.png', './asest/IMAGE/list/5.png', 
    './asest/IMAGE/list/9.png', './asest/IMAGE/list/10.png', './asest/IMAGE/list/11.png', './asest/IMAGE/list/12.png', 
    './asest/IMAGE/list/13.png'
  ];

  images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product Image';
    img.classList.add('shop-image-forUser');
    shopImagesContainerForUser.appendChild(img);
  });

  // إضافة السهم الأيمن
  const rightArrowContainerForUser = document.createElement('div');
  rightArrowContainerForUser.classList.add('arrow-container-forUser');
  const rightArrowForUser = document.createElement('button');
  rightArrowForUser.classList.add('arrow-right-forUser');
  rightArrowForUser.textContent = '→';
  rightArrowContainerForUser.appendChild(rightArrowForUser);

  // إضافة السهمين وحاوية الصور إلى الحاوية الرئيسية
  shopGalleryForUser.appendChild(leftArrowContainerForUser);
  shopGalleryForUser.appendChild(shopImagesContainerForUser);
  shopGalleryForUser.appendChild(rightArrowContainerForUser);
  
  // الحصول على الفوتر
  const footerForUser = document.querySelector('.footer');
  
  // إضافة القسم إلى الصفحة قبل الفوتر
  document.body.insertBefore(shopGalleryForUser, footerForUser);

  // ضبط بداية عرض الصور
  let currentIndex = 0;

  function showImages() {
    const imageElements = shopImagesContainerForUser.querySelectorAll('.shop-image-forUser');
    imageElements.forEach((image, index) => {
      if (index >= currentIndex && index < currentIndex + 5) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  // إظهار الصور الأولية
  showImages();

  // حدث الضغط على السهم الأيمن
  rightArrowForUser.addEventListener('click', () => {
    if (currentIndex < images.length - 5) {
      currentIndex++;
    } else {
      currentIndex = 0; // العودة للبداية
    }
    showImages();
  });

  // حدث الضغط على السهم الأيسر
  leftArrowForUser.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - 5; // الذهاب للنهاية
    }
    showImages();
  });
});

// more & more product 
document.addEventListener('DOMContentLoaded', function () {
  // إنشاء الحاوية الرئيسية
  const shopGalleryMoreForUser = document.createElement('div');
  shopGalleryMoreForUser.classList.add('shop-gallery-more-forUser');
  
  // إضافة العنوان "SHOP"
  const shopTitleMoreForUser = document.createElement('h1');
  shopTitleMoreForUser.classList.add('shop-title-more-forUser');
  shopTitleMoreForUser.textContent = 'SHOP';
  shopTitleMoreForUser.style.fontSize = '10px'; // الخط بحجم 10px
  shopTitleMoreForUser.style.color = 'white';  // لون الخط أبيض
  shopGalleryMoreForUser.appendChild(shopTitleMoreForUser);
  
  // إضافة العنوان "Latest Products"
  const latestProductsTitleMoreForUser = document.createElement('h2');
  latestProductsTitleMoreForUser.classList.add('latest-products-title-more-forUser');
  latestProductsTitleMoreForUser.textContent = 'Latest Products';
  latestProductsTitleMoreForUser.style.fontSize = '30px'; // الخط بحجم 30px
  latestProductsTitleMoreForUser.style.color = 'white';  // لون الخط أبيض
  shopGalleryMoreForUser.appendChild(latestProductsTitleMoreForUser);
  
  // إنشاء السهم الأيسر
  const leftArrowContainerMoreForUser = document.createElement('div');
  leftArrowContainerMoreForUser.classList.add('arrow-container-more-forUser');
  const leftArrowMoreForUser = document.createElement('button');
  leftArrowMoreForUser.classList.add('arrow-left-more-forUser');
  leftArrowMoreForUser.textContent = '←';
  leftArrowContainerMoreForUser.appendChild(leftArrowMoreForUser);
  
  // إنشاء حاوية الصور
  const shopImagesContainerMoreForUser = document.createElement('div');
  shopImagesContainerMoreForUser.classList.add('shop-images-container-more-forUser');
  
  // إضافة 20 صورة إلى الحاوية
  const imagesMore = [
    './asest/IMAGE/moreProduct/1.png', './asest/IMAGE/moreProduct/2.png', './asest/IMAGE/moreProduct/3.png', './asest/IMAGE/moreProduct/4.png', 
    './asest/IMAGE/moreProduct/5.png', './asest/IMAGE/moreProduct/6.png', './asest/IMAGE/moreProduct/7.png', './asest/IMAGE/moreProduct/8.png', 
    './asest/IMAGE/moreProduct/9.png', './asest/IMAGE/moreProduct/10.png', './asest/IMAGE/moreProduct/11.png', './asest/IMAGE/moreProduct/12.png', 
    './asest/IMAGE/moreProduct/13.png', './asest/IMAGE/moreProduct/14.png', './asest/IMAGE/moreProduct/15.png', './asest/IMAGE/moreProduct/16.png', 
    './asest/IMAGE/moreProduct/17.png', './asest/IMAGE/moreProduct/18.png', './asest/IMAGE/moreProduct/19.png', './asest/IMAGE/moreProduct/20.png'
  ];

  imagesMore.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Product Image';
    img.classList.add('shop-image-more-forUser');
    shopImagesContainerMoreForUser.appendChild(img);
  });

  // إضافة السهم الأيمن
  const rightArrowContainerMoreForUser = document.createElement('div');
  rightArrowContainerMoreForUser.classList.add('arrow-container-more-forUser');
  const rightArrowMoreForUser = document.createElement('button');
  rightArrowMoreForUser.classList.add('arrow-right-more-forUser');
  rightArrowMoreForUser.textContent = '→';
  rightArrowContainerMoreForUser.appendChild(rightArrowMoreForUser);

  // إضافة السهمين وحاوية الصور إلى الحاوية الرئيسية
  shopGalleryMoreForUser.appendChild(leftArrowContainerMoreForUser);
  shopGalleryMoreForUser.appendChild(shopImagesContainerMoreForUser);
  shopGalleryMoreForUser.appendChild(rightArrowContainerMoreForUser);
  
  // الحصول على الفوتر
  const footerMoreForUser = document.querySelector('.footer');
  
  // إضافة القسم إلى الصفحة قبل الفوتر
  document.body.insertBefore(shopGalleryMoreForUser, footerMoreForUser);

  // ضبط بداية عرض الصور
  let currentIndexMoreForUser = 0;

  function showImagesMoreForUser() {
    const imageElementsMoreForUser = shopImagesContainerMoreForUser.querySelectorAll('.shop-image-more-forUser');
    imageElementsMoreForUser.forEach((image, index) => {
      if (index >= currentIndexMoreForUser && index < currentIndexMoreForUser + 4) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  // إظهار الصور الأولية
  showImagesMoreForUser();

  // حدث الضغط على السهم الأيمن
  rightArrowMoreForUser.addEventListener('click', () => {
    if (currentIndexMoreForUser < imagesMore.length - 4) {
      currentIndexMoreForUser++;
    } else {
      currentIndexMoreForUser = 0; // العودة للبداية
    }
    showImagesMoreForUser();
  });

  // حدث الضغط على السهم الأيسر
  leftArrowMoreForUser.addEventListener('click', () => {
    if (currentIndexMoreForUser > 0) {
      currentIndexMoreForUser--;
    } else {
      currentIndexMoreForUser = imagesMore.length - 4; // الذهاب للنهاية
    }
    showImagesMoreForUser();
  });
});


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
