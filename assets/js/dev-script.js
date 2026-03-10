/* ================================
   Tailwind Configuration
================================ */
tailwind.config = {
  theme: {
    extend: {
      screens: {
        "max-1400": { raw: "(max-width: 1400px)" },
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif']
      },
    },
  },
};


/* ================================
   Run Scripts After DOM Loaded
================================ */
document.addEventListener("DOMContentLoaded", function () {


/* =====================================================
   Tiles Calculator Script
   Calculate Area, Boxes and Tiles
===================================================== */
function runCalculation() {

  const L = parseFloat(document.getElementById("calc-length")?.value) || 0;
  const W = parseFloat(document.getElementById("calc-width")?.value) || 0;
  const sizeSelect = document.getElementById("calc-size");

  if (!sizeSelect) return;

  const selectedOption = sizeSelect.options[sizeSelect.selectedIndex];

  const pcsPerBox = parseInt(selectedOption.getAttribute("data-pcs"));
  const sqmPerBox = parseFloat(selectedOption.getAttribute("data-sqm"));

  const totalSqFt = L * W;
  const totalSqM = totalSqFt * 0.092903;

  const boxesRequired = Math.ceil(totalSqM / sqmPerBox);
  const totalTiles = boxesRequired * pcsPerBox;

  document.getElementById("res-sqft").value = totalSqFt.toFixed(2);
  document.getElementById("res-sqm").value = totalSqM.toFixed(2);
  document.getElementById("res-boxes").value = boxesRequired;
  document.getElementById("res-tiles").value = totalTiles;

}

window.runCalculation = runCalculation;


/* =====================================================
   Mobile Menu Script
   Open / Close Mobile Navigation
===================================================== */

const btn = document.getElementById("mobile-menu-button");
const closeBtn = document.getElementById("close-menu");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("mobile-menu-overlay");


function openMobileMenu() {

  if (!menu || !overlay) return;

  menu.classList.remove("hidden");
  overlay.classList.remove("hidden");

  setTimeout(() => {
    menu.classList.remove("-translate-x-full");
  }, 10);

  document.body.style.overflow = "hidden";

  document.querySelectorAll(".fixed-side-element")
    .forEach(el => el.style.display = "none");

}


function closeMobileMenu() {

  if (!menu || !overlay) return;

  menu.classList.add("-translate-x-full");
  overlay.classList.add("hidden");

  document.body.style.overflow = "";

  setTimeout(() => menu.classList.add("hidden"), 300);

  document.querySelectorAll(".fixed-side-element")
    .forEach(el => el.style.display = "");

}


if (btn && closeBtn) {

  btn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);

}


/* =====================================================
   Mobile Submenu Toggle
===================================================== */

window.toggleMobileSubmenu = function (element) {

  const submenu = element.nextElementSibling;
  const icon = element.querySelector("i");

  if (submenu) submenu.classList.toggle("hidden");
  if (icon) icon.classList.toggle("rotate-180");

};


/* =====================================================
   Quick Enquiry Modal Script
   Open / Close Modal
===================================================== */

window.openQuickEnquiryModal = function () {

  const modal = document.getElementById("quickEnquiryModal");

  if (!modal) return;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

}


window.closeQuickEnquiryModal = function () {

  const modal = document.getElementById("quickEnquiryModal");

  if (!modal) return;

  modal.classList.add("hidden");
  document.body.style.overflow = "";

}


/* =====================================================
   Hero Banner Slider Script
   Auto Slide Every 5 Seconds
===================================================== */

const slider = document.getElementById("slider");

if (slider) {

  let currentSlide = 0;
  const totalSlides = slider.children.length;

  setInterval(() => {

    currentSlide++;

    if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }

    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  }, 5000);

}


/* =====================================================
   Online Tiles Visualizer
   Before / After Image Comparison
===================================================== */

window.moveDivisor = function (val) {

  const divisor = document.getElementById("divisor");
  const handle = document.getElementById("handle");
  const container = document.getElementById("comparison-container");

  if (!divisor || !handle || !container) return;

  divisor.style.width = val + "%";
  handle.style.left = val + "%";

  const innerImg = divisor.querySelector("div");

  if (innerImg) {
    innerImg.style.width = container.offsetWidth + "px";
  }

}


/* =====================================================
   Window Resize Event For Visualizer
===================================================== */

window.addEventListener("resize", () => {

  const range = document.querySelector('input[type="range"]');

  if (range) {
    moveDivisor(range.value);
  }

});


/* =====================================================
   Default Visualizer Position
===================================================== */

moveDivisor(50);

});
/* =====================================================
   whatasapp icon click 
===================================================== */
 function widgetToggle() {
        const widget = document.getElementById('widToggle');
        if (widget.classList.contains('hidden')) {
            widget.classList.remove('hidden');
            widget.style.opacity = '0';
            widget.style.transform = 'translateY(10px)';
            setTimeout(() => {
                widget.style.transition = 'all 0.3s ease';
                widget.style.opacity = '1';
                widget.style.transform = 'translateY(0)';
            }, 10);
        } else {
            widget.classList.add('hidden');
        }
    }