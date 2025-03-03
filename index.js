// бургер меню

function myFunction(x) {
  x.classList.toggle("change");
}

// Поднятие вверх

const btnUp = {
  el: document.querySelector(".up-button"),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove("button-up_hide");
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add("button-up_hide");
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener("scroll", () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector(".up-button").onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
  },
};
btnUp.addEventListener();
