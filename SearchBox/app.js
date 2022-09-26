const searchIcon = document.querySelector(".search_icon");
const searchBox = document.querySelector(".search");
const body = document.querySelector("body");

function controlSearch(e) {
  if (e.target !== e.currentTarget) {
    searchBox.classList.add("show");
    searchBox.children[0].children[0].focus();
  } else {
    searchBox.classList.remove("show");
  }
}

searchIcon.addEventListener("click", controlSearch);
body.addEventListener("click", controlSearch);
