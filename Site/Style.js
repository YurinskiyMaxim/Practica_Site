const header__account = document.querySelector(".header__account--conteiner");
const context_menu = document.querySelector(".context_menu");

header__account.addEventListener("click", () => {
  context_menu.classList.add("context_menu--opened");
  header__account.addEventListener("click", () => {
    context_menu.classList.remove("context_menu--opened");
  });
});
const context_menu_exit--element = document.querySelector(".context_menu_exit");
const account_login__menu = document.querySelector(".account_login__menu");

context_menu_exit.addEventListener("click", () => {
  account_login__menu.classList.add("account_login__menu--opened");
  context_menu_exit.addEventListener("click", () => {
    account_login__menu.classList.remove("account_login__menu--opened");
  });
});