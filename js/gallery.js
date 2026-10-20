// Portfolio Gallery
const galleryContainer = document.getElementById("portfolio-gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

// Display photos in the gallery
function renderGallery(category = "all") {
  if (!galleryContainer || typeof photos === "undefined") {
    return;
  }

  const filteredPhotos =
    category === "all"
      ? photos
      : photos.filter((photo) => photo.category === category);

  galleryContainer.innerHTML = "";

  filteredPhotos.forEach((photo) => {
    galleryContainer.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
        <a href="details.html?id=${photo.id}" class="gallery-card gallery-link">
          <img
            src="${photo.image}"
            alt="${photo.alt}"
            class="gallery-image"
            loading="lazy"
          >
          <div class="gallery-info">
            <h2 class="gallery-title">${photo.title}</h2>
            <p class="gallery-category">${photo.category}</p>
          </div>
        </a>
      </div>
    `;
  });
}

// Show all photos when the page loads
renderGallery();

// Filter photos when a button is clicked
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    renderGallery(category);
  });
});
