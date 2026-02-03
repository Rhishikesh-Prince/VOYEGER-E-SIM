
// 1. Mobile Menu Toggle Logic
document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('menu-open');
});


// hero slides 

let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

setInterval(() => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 100}vw)`;
}, 3000);


// testimonials slider (fixed for mobile / tablet / desktop)

const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");

let index1 = 0;
const GAP = 45; // must match CSS gap

function getVisibleCount() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function slideTestimonials() {
  if (!cards.length) return;

  const visible = getVisibleCount();
  const cardWidth = cards[0].getBoundingClientRect().width + GAP;
  const maxIndex = cards.length - visible;

  index++;

  if (index > maxIndex) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// auto slide
setInterval(slideTestimonials, 3000);

// reset on resize
window.addEventListener("resize", () => {
  index = 0;
  track.style.transform = "translateX(0px)";
});



// hoqw to wqorek 

// HOW IT WORKS IMAGE SWITCH
const steps = document.querySelectorAll(".how-step");
const howImg = document.getElementById("howImg");

steps.forEach(step=>{
  step.addEventListener("mouseenter", ()=>{
    steps.forEach(s=>s.classList.remove("active"));
    step.classList.add("active");

    howImg.style.opacity = 0;
    setTimeout(()=>{
      howImg.src = step.dataset.img;
      howImg.style.opacity = 1;
    },200);
  });
});
