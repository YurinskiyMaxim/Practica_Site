const header__account = document.querySelector(".header__account--conteiner");
const context_menu = document.querySelector(".context_menu");

header__account.addEventListener("click", (event) => {
  event.stopPropagation();

  if (context_menu.classList.contains("context_menu--opened")) {
    context_menu.classList.remove("context_menu--opened");
  } else {
    context_menu.classList.add("context_menu--opened");
  }
});
document.addEventListener("click", (event) => {
  if (
    !context_menu.contains(event.target) &&
    !header__account.contains(event.target)
  ) {
    context_menu.classList.remove("context_menu--opened");
  }
});