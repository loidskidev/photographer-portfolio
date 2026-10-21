// Photo Details Page
const detailsContainer = document.getElementById("photo-details");

// Get the photo ID from the URL
const params = new URLSearchParams(window.location.search);
const photoId = Number(params.get("id"));

// Find the selected photo
if (detailsContainer && typeof photos !== "undefined") {
  const selectedPhoto = photos.find((photo) => photo.id === photoId);

  if (selectedPhoto) {
    detailsContainer.innerHTML = `
      <div class="row align-items-center g-4">
        <div class="col-12 col-lg-7">
          <img
            src="${selectedPhoto.image}"
            alt="${selectedPhoto.alt}"
            class="details-image"
          >
        </div>

        <div class="col-12 col-lg-5">
          <p class="details-category">${selectedPhoto.category}</p>
          <h1 class="details-title">${selectedPhoto.title}</h1>
          <p class="details-description">${selectedPhoto.description}</p>
        </div>
      </div>
    `;
  } else {
    detailsContainer.innerHTML = `
      <p>Photo not found.</p>
    `;
  }
}
