
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



// testiu8monials 
const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");

let slidePos = 0;

function getVisibleCount(){
  if(window.innerWidth <= 600) return 1;
  if(window.innerWidth <= 900) return 2;
  return 3;
}

setInterval(()=>{
  const visible = getVisibleCount();
  slidePos += visible;

  if(slidePos >= cards.length){
    slidePos = 0;
  }

  track.style.transform = `translateX(-${slidePos * (100/visible)}%)`;

},3000);

window.addEventListener("resize",()=>{
  slidePos = 0;
  track.style.transform = `translateX(0%)`;
});


// countries .js 