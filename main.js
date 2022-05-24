const grids = document.querySelectorAll(".grid-item");
const overlayDiv = document.querySelector("#overlay");
const overlayImg = document.querySelector("#overlay img");
const overlayBtn = document.querySelector("#overlay button");

function activateOverlay(e) {
  let imgSrc = e.path[0].attributes[0].textContent; //get img src
  overlayImg.setAttribute("src", imgSrc);
  overlayDiv.classList.add("display-flex");
}

function closeOverlay() {
  overlayDiv.classList.remove("display-flex");
}

grids.forEach((grid) => {
  grid.addEventListener("click", activateOverlay);
});

overlayBtn.addEventListener("click", closeOverlay);
