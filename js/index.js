const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Navigation

let nav = document.querySelectorAll('nav a');

let nav1 = document.querySelector("nav a");
let nav2 = document.querySelectorAll("nav a")[1];
let nav3 = document.querySelectorAll("nav a")[2];
let nav4 = document.querySelectorAll("nav a")[3];
let nav5 = document.querySelectorAll("nav a")[4];
let nav6 = document.querySelectorAll("nav a")[5];


nav1.textContent = siteContent.nav["nav-item-1"];
nav2.textContent = siteContent.nav['nav-item-2'];
nav3.textContent = siteContent.nav["nav-item-3"];
nav4.textContent = siteContent.nav["nav-item-4"];
nav5.textContent = siteContent.nav["nav-item-5"];
nav6.textContent = siteContent.nav["nav-item-6"];



// CTA

let title = document.querySelector(".cta .cta-text h1");
let startButton = document.querySelector(".cta .cta-text button");
let ctaImg = document.querySelector(".cta #cta-img");

title.textContent = siteContent.cta['h1'];
startButton.textContent = siteContent.cta['button'];
ctaImg.src = siteContent["cta"]["img-src"];


//Main-Content
let features = document.querySelector(".top-content h4");
let featuresInfo = document.querySelector(".top-content p");

let about = document.querySelectorAll(".top-content h4")[1];
let aboutInfo = document.querySelectorAll(".top-content p")[1];

let midImg = document.querySelectorAll(".top-content #middle-img");

let services = document.querySelector(".bottom-content h4");
let servicesInfo = document.querySelector(".bottom-content p");

let products = document.querySelectorAll(".bottom-content h4")[1];
let productsInfo = document.querySelectorAll(".bottom-content p")[1];

let vision = document.querySelectorAll(".bottom-content h4")[2];
let visionInfo = document.querySelectorAll(".bottom-content p")[2];


features.textContent = siteContent["main-content"]["features-h4"];
featuresInfo.textContent = siteContent["main-content"]["features-content"];
about.textContent = siteContent["main-content"]["about-h4"];
aboutInfo.textContent = siteContent["main-content"]["about-content"];
midImg.src = siteContent["main-content"]["middle-img-src"];
services.textContent = siteContent["main-content"]["services-h4"];
servicesInfo.textContent = siteContent["main-content"]["services-content"];
products.textContent = siteContent["main-content"]["product-h4"];
productsInfo.textContent = siteContent["main-content"]["product-content"];
vision.textContent = siteContent["main-content"]["vision-h4"];
visionInfo.textContent = siteContent["main-content"]["vision-content"];


//Contact
let contactHeader = document.querySelector(".contact h4");
let address = document.querySelector(".contact p");
let number = document.querySelectorAll(".contact p")[1];
let email = document.querySelectorAll(".contact p")[2];


contactHeader.textContent = siteContent.contact["contact-h4"];
address.textContent = siteContent.contact.address;
number.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;



//Footer
let footer = document.querySelector("footer p");

footer.textContent = siteContent.footer.copyright;

