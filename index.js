const navLinks = document.querySelectorAll(".offcanvas-body .nav-item");
const pageTag = document.querySelector(".page-tag");
const plusBtn = document.querySelector(".fa-plus");
const overlay = document.querySelector(".overlay");
const reservationDetails = document.querySelector(".reservation-details");
const close = document.querySelector(".close");
const myNavItem = document.querySelectorAll('.nav-link[data-target]'); // Target nav links
const sections = document.querySelectorAll('.content'); // Target sections

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    pageTag.innerHTML = navLinks[i].textContent;
  })
}

plusBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  reservationDetails.style.display = "block";
})

close.addEventListener("click", () => {
  overlay.style.display = "none";
  reservationDetails.style.display = "none";
})


// Attach event listeners to nav items

myNavItem.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default behavior

    // Get the target section ID
    const targetId = link.getAttribute('data-target');
    console.log(targetId);


    // Hide all sections and remove active class from nav links
    sections.forEach(section => section.classList.remove('active'));
    myNavItem.forEach(nav => nav.classList.remove('active'));

    // Show the targeted section and mark nav link as active
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    link.classList.add('active');
    // console.log(sections);

  });
});
