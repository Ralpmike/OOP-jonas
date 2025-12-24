
const togglerButton = document.querySelector(".toggler");
const accordion = document.querySelector(".accordion");
const accordionElem = document.querySelector(".accordion_item");
const allAccordionElems = document.querySelectorAll(".accordion_item");
const navBarBtnToggler = document.getElementById("menuToggle");


accordion.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("toggler")) {
    target.classList.toggle("active");
    const parent = target.closest(".accordion_item");
    if (parent.classList.contains("active")) {
      parent.classList.remove("active");
      return;
    }
    allAccordionElems.forEach((item) => {
      item.classList.remove("active");
    })
    console.log(parent);
    parent.classList.add("active");
  }
 
  // accordionElem.classList.toggle("active");
});

navBarBtnToggler.addEventListener("click", () => {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
})


const favouriteMeal = document.getElementById("favourite_meals");
favouriteMeal.addEventListener("change", (e) => {
  console.log(e.target.value);
  console.log(e.target.options);
})
