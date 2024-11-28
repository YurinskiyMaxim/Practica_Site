const context_menu_exit = document.querySelector(".context_menu_exit");
const account_login__menu = document.querySelector(".account_login__menu");

context_menu_exit.addEventListener("click", (event) => {
  event.stopPropagation();
  account_login__menu.style.display = "block";
  setTimeout(() => {
    account_login__menu.classList.add("account_login__menu--opened");
  }, 10);

  document.addEventListener("click", closeMenuOnOutsideClick);
});

function closeMenuOnOutsideClick(event) {
  if (
    !account_login__menu.contains(event.target) &&
    event.target !== context_menu_exit
  ) {
    account_login__menu.classList.remove("account_login__menu--opened");
    setTimeout(() => {
      account_login__menu.style.display = "none";
    }, 300);
    document.removeEventListener("click", closeMenuOnOutsideClick);
  }
}
