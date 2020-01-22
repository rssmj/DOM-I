const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io"
	},
	footer: {
		copyright: "Copyright Great Idea! 2018"
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav
let navItems = document.querySelectorAll("nav a");
navItems.forEach((link, content) => {
	link.textContent = siteContent.nav[`nav-item-${content + 1}`];
});
navItems.forEach(navColor => (navColor.style.color = "green"));
let newNavItems = document.querySelector("nav");
let navItemOne = document.createElement("a");
navItemOne.textContent = "Enter";
navItemOne.style.color = "green";
navItemOne.href = "#";
newNavItems.prepend(navItemOne);
let navItemTwo = document.createElement("a");
navItemTwo.textContent = "Exit";
navItemTwo.style.color = "green";
navItemTwo.href = "#";
newNavItems.appendChild(navItemTwo);

//header
let ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent.cta["h1"];
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta["button"];
let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

//main
let headerTitles = document.querySelectorAll(".main-content h4");
headerTitles[0].textContent = siteContent["main-content"]["features-h4"];
headerTitles[1].textContent = siteContent["main-content"]["about-h4"];
headerTitles[2].textContent = siteContent["main-content"]["services-h4"];
headerTitles[3].textContent = siteContent["main-content"]["product-h4"];
headerTitles[4].textContent = siteContent["main-content"]["vision-h4"];
let paraContent = document.querySelectorAll(".main-content p");
paraContent[0].textContent = siteContent["main-content"]["features-content"];
paraContent[1].textContent = siteContent["main-content"]["about-content"];
paraContent[2].textContent = siteContent["main-content"]["services-content"];
paraContent[3].textContent = siteContent["main-content"]["product-content"];
paraContent[4].textContent = siteContent["main-content"]["vision-content"];
let middleImg = document.querySelector(".main-content .middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

//contact
let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];
let contactPara = document.querySelectorAll(".contact p");
contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

//footer
let footerContent = document.querySelector("footer p");
footerContent.textContent = siteContent["footer"]["copyright"];
