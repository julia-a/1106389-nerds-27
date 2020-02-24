var link = document.querySelector(".contacts__button");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");

var formwrite = popup.querySelector(".write");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var writeerror = document.querySelector(".write__error");


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  username.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
});

formwrite.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !message.value) { 
    evt.preventDefault();
    writeerror.classList.add("write__error_show");
  }
});