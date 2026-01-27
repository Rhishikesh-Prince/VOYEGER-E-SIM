
// 1. Mobile Menu Toggle Logic
document.getElementById('menuBtn').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('menu-open');
});
// dri=oopdwo debit 

function toggleCardForm(){
  const form = document.querySelector(".card-form");

  if(form.style.display === "block"){
    form.style.display = "none";
  }else{
    form.style.display = "block";
  }
}