function logoDesign() {
    window.open("pages/logo-design.html", "_self");
}
function brandIdentity() {
    window.open("pages/brand-identity.html", "_self");
}
function uiuxDesign() {
    window.open("pages/ui-ux-design.html", "_self");
}

// logo design projects
function cafeCareemLogo() {
    window.open("../pages/logo-design/café-careem.html", "_self");
}
function roomineLogo() {
    window.open("../pages/logo-design/roomine.html", "_self");
}
function jubeBarberShopLogo() {
    window.open("../pages/logo-design/juve-barber-shop.html", "_self");
}
function villaMyPearlLogo() {
    window.open("../pages/logo-design/villa-my-pearl.html", "_self");
}
// visual identity projects
function cafeCareemIdentity() {
    window.open("../pages/visual-identity/café-careem.html", "_self");
}
function roomineIdentity() {
    window.open("../pages/visual-identity/roomine.html", "_self");
}
function jubeBarberShopIdentity() {
    window.open("../pages/visual-identity/juve-barber-shop.html", "_self");
}
function villaMyPearlIdentity() {
    window.open("../pages/visual-identity/villa-my-pearl.html", "_self");
}
// ui-ux design projects
function loginSignUpLandingPage() {
    window.open("../pages/ui-ux-design/login-sign-up-landing-page.html", "_self");
}
function loginSignUpPages() {
    window.open("../pages/ui-ux-design/login-sign-up-pages.html", "_self");
}
function redesignDesktopApp() {
    window.open("../pages/ui-ux-design/redesign-desktop-app.html", "_self");
}
// behance
function behance() {
    window.open("https://www.behance.net/elainimohssine");
}
// navigation bar

var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menu-icon");
var closeBtn = document.getElementById("close-icon");
var header = document.querySelector("header");

/* open icon */
function showMenu() {
    menu.classList.add("active");
    menuBtn.classList.add("inactive");
    closeBtn.classList.add("active");
    header.classList.add("sticky");
    header.classList.add("bg-active");
}
/* close icon */
function hideMenu() {
    menu.classList.remove("active");
    menuBtn.classList.remove("inactive");
    closeBtn.classList.remove("active");
    header.classList.remove("sticky");
    header.classList.remove("bg-active");
}