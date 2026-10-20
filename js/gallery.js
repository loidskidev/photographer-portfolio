// Portfolio Gallery
const galleryContainer = document.getElementById("portfolio-gallery");

if (galleryContainer && typeof photos !== "undefined") {
  photos.forEach((photo) => {
    galleryContainer.innerHTML += `
      <div class="col-12 col-md-6 col-lg-4">
        <div class="gallery-card">
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
        </div>
      </div>
    `;
  });
}
