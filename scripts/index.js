let formElement = document.querySelector(".popup__form");
let editBtn = document.querySelector(".profile__editor");
let closeBtn = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");
let profTitle = document.querySelector(".profile__name");
let profParag = document.querySelector(".profile__description");

function openPopup() {
  popup.classList.add("popup_opened")
  nameInput.value = profTitle.textContent
  jobInput.value = profParag.textContent
}

function closePopup() {
  popup.classList.remove("popup_opened")
}

function sendForm(evt) {
  evt.preventDefault()
  profTitle.textContent = nameInput.value
  profParag.textContent = jobInput.value
  closePopup()
}

editBtn.addEventListener("click", openPopup);
closeBtn.addEventListener("click", closePopup);
formElement.addEventListener("submit", sendForm);