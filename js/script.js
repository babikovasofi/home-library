const tabs = document.querySelectorAll(".tabs__btn[data-status]");
const cards = document.querySelectorAll(".book-card");
const search = document.querySelector(".search");
let currentStatus = "all";

function filterBooks() {
  const text = search.value.toLowerCase();

  cards.forEach(function (card) {
    const title = card.querySelector(".book-card__title").textContent.toLowerCase();
    const statusOk = currentStatus === "all" || card.dataset.status === currentStatus;
    const textOk = title.includes(text);
    card.hidden = !(statusOk && textOk);
  });
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    tabs.forEach(function (item) {
      item.classList.remove("tabs__btn--active");
    });
    tab.classList.add("tabs__btn--active");
    currentStatus = tab.dataset.status;
    filterBooks();
  });
});

if (search) {
  search.addEventListener("input", filterBooks);
}

const statusButtons = document.querySelectorAll(".status__btn");

statusButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    statusButtons.forEach(function (item) {
      item.classList.remove("status__btn--active");
    });
    button.classList.add("status__btn--active");
  });
});

const arrows = document.querySelectorAll(".arrow");

arrows.forEach(function (arrow) {
  arrow.addEventListener("click", function () {
    const item = arrow.closest(".queue__item");
    const list = item.parentNode;

    if (arrow.dataset.dir === "up" && item.previousElementSibling) {
      list.insertBefore(item, item.previousElementSibling);
    }

    if (arrow.dataset.dir === "down" && item.nextElementSibling) {
      list.insertBefore(item.nextElementSibling, item);
    }
  });
});
