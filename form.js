const item = document.querySelectorAll(".item");
const answer_canseled = document.querySelectorAll(".form-answer-canseled");

// перебор input по data-flag
item.forEach((el) => {
  if (el.dataset.flag == 0) {
  }
  if (el.dataset.flag == 1) {
    check(el, answer_canseled[0]);
  }
  if (el.dataset.flag == 2) {
    check(el, answer_canseled[1]);
  }
  if (el.dataset.flag == 3) {
  }
  if (el.dataset.flag == 4) {
  }
});

// показать крестик при вводе текста в input, очиститьё input при нажатии на крестик
function check(input, x) {
  input.addEventListener("input", function (e) {
    e.preventDefault();
    if (this.value.length > 0) {
      x.style.display = "block";
      x.addEventListener("click", function () {
        input.value = "";
        x.style.display = "none";
        input.focus();
      });
    } else {
      x.style.display = "none";
    }
  });
}

// отмена модального окна answer
function workerModalAnswer(e) {
  e.preventDefault();
  modal[5].classList.add("modal-hide");
}

// добавление модал answer при клике на linck_answer(ответ)
const linck_answer = document.querySelectorAll(".elem-answer");

linck_answer.forEach((item, key) => {
  console.log(item);

  if (item.dataset.answer == key) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(item);

      modal[5].classList.remove("modal-hide");
    });
  }
});

// удаление  по  кнопке  (отмена)
const btn_cancel = document.querySelector(".cancel-answer");

btn_cancel.addEventListener("click", function (e) {
  workerModalAnswer(e);
});
