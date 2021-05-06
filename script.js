const navToggle = document.getElementById('toggle');
const toggleClass = document.getElementById('nav');

navToggle.addEventListener("click", () =>{
  toggleClass.classList.toggle("active");
});