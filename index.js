let navLinks = document.querySelectorAll(".offcanvas-body .nav-item");
let pageTag = document.querySelector(".page-tag");
let plusBtn = document.querySelectorAll(".fa-plus");
let overlay = document.querySelector(".overlay");
let reservationDetails = document.querySelector(".reservation-details");
let close = document.querySelector(".close");
let myNavItem = document.querySelectorAll('.nav-link[data-target]'); // Target nav links
let sections = document.querySelectorAll('.content'); // Target sections
let view = document.querySelectorAll(".view");
let details = document.querySelector(".appointment-details");
let detailsBtn = document.querySelector(".details-btn");
let appointmentList = document.querySelector(".listAll");


for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    pageTag.innerHTML = navLinks[i].textContent;
  })
}

console.log(plusBtn);

plusBtn[1].addEventListener("click", () => {
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

    console.log(link);
    
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


for (let index = 0; index < view.length; index++) {
  let containAll = document.getElementById("contain-all");
  let allList = document.getElementById("all-list");
  view[index].addEventListener('click', ()=>{
    containAll.style.display = 'block';
    allList.style.display = 'none';
  })
}

detailsBtn.addEventListener('click', ()=>{
  appointmentList.style.display = 'none';
  details.style.display = 'block';
});