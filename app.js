document.addEventListener("DOMContentLoaded", function () {
  /* ---- mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav ul");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
      });
    });
  }

  /* ---- render gallery from gallery-data.js ---- */
  var grid = document.getElementById("gallery-grid");
  if (grid && typeof GALLERY_ITEMS !== "undefined") {
    GALLERY_ITEMS.forEach(function (item, i) {
      var card = document.createElement("div");
      card.className = "card";
      card.innerHTML =
        '<div class="thumb"><img src="images/gallery/' + item.file + '" alt="' + item.title + '" loading="lazy"></div>' +
        '<div class="cap"><h3>' + item.title + "</h3><p>" + item.note + "</p></div>";
      card.addEventListener("click", function () {
        openLightbox(item);
      });
      grid.appendChild(card);
    });
  }

  /* ---- lightbox ---- */
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbTitle = document.getElementById("lightbox-title");
  var lbNote = document.getElementById("lightbox-note");
  var lbClose = document.getElementById("lightbox-close");

  function openLightbox(item) {
    lbImg.src = "images/gallery/" + item.file;
    lbImg.alt = item.title;
    lbTitle.textContent = item.title;
    lbNote.textContent = item.note;
    lightbox.classList.add("open");
  }
  function closeLightbox() {
    lightbox.classList.remove("open");
  }
  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
