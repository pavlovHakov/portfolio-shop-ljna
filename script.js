// сокрытие и показ блока справки
// сокрытие и показ border и box-shadow для header

let block_help = document.querySelector(".block-help");
let header = document.querySelector(".header");

function show() {
  block_help.classList.remove("hide-help");
}

function showBorderHeader() {
  header.classList.remove("hide-border-shadow-header");
}

function hide() {
  block_help.classList.add("hide-help");
}
function hideBorderHeader() {
  header.classList.add("hide-border-shadow-header");
}

// scroiiWindow событие

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY || document.documentElement.scrollTop;

  scrollY > 5 ? showBorderHeader() : hideBorderHeader();
  scrollY > 900 ? hide() : show();
});

// модальное окно

const modal = document.querySelectorAll(".modal-window");

const elemHelp = document.querySelectorAll(".block-help li");

// открытие модального окна

function removeModalHide(item, key) {
  if (item.dataset.active == key) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      modal[key].classList.remove("modal-hide");
    });
  }
}

elemHelp.forEach((item, key) => {
  removeModalHide(item, key);
});

// закрытие модального окна

function addModalHide(item, key) {
  if (item.dataset.active == key) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      modal[key].classList.add("modal-hide");
    });
  }
}

// закрытие modal по крестику (help)
document.querySelectorAll(".x").forEach((item, key) => {
  addModalHide(item, key);
});

// закрытие modal по экрану (help)
const block_pustoi = document.querySelectorAll(".block-pustoi");

block_pustoi.forEach((item, key) => {
  addModalHide(item, key);
});

// функция активной кнопки
function addActiveCnp(elem, style) {
  return (elem = document.querySelectorAll("." + elem)).forEach((item, key) => {
    item.addEventListener("click", () => {
      elem.forEach((row) => row.classList.remove(style));
      item.classList.add(style);
    });
  });
}

// активный nav блок меню

addActiveCnp("card-menu", "active-card");

// активная кнопка - размеры
addActiveCnp("item-size-cnp", "size-cnp-active");

// активный nav отзывы-вопросы

addActiveCnp("elem-reviews_questions", "active-nav-reviews_questions");

//функции выбора отзывов и вопросов
const navChat = document.querySelectorAll(".elem-reviews_questions");
const chat = document.querySelectorAll(".chat");

navChat.forEach((item, key) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    chat.forEach((row) => row.classList.remove("active-chat"));
    console.log(chat[key]);

    chat[key].classList.add("active-chat");
  });
});

//  активная кнопкa - chat (вопросы)

addActiveCnp("item-chat-cnp", "cnp-chat-active");
