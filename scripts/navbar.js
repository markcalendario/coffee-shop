const hamburger = document.getElementById("hamburger");

function handleHamburgerClick() {
  const navVisibility = document.getElementById("nav");

  if (navVisibility.style.display === "flex") {
    navVisibility.style.display = "none";
    hamburger.innerHTML = "&#x2630;";
  } else {
    navVisibility.style.display = "flex";
    hamburger.innerHTML = "&#215;";
  }
}

hamburger.addEventListener("click", handleHamburgerClick);
