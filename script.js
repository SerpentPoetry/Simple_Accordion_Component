const accordionItem = document.querySelectorAll(".item");

accordionItem.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
