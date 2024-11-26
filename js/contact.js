// öppna modal-ruta när formulär skickas
const sendButton = document.querySelector(".form-send");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-modal");

function openModal() {
  modal.classList.add("modal-show");
}

function closeModal() {
  modal.classList.remove("modal-show");
}

function closeModalContainer(event) {
  if (event.target === modal) {
    modal.classList.remove("modal-show");
  }
}

sendButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", closeModalContainer);
