document.querySelectorAll(".triangle").forEach((single) => {
  single.addEventListener("click", function () {
    single.nextElementSibling.nextElementSibling.classList.toggle(
      "child-ul-visible"
    );
    single.classList.toggle("triangle-rotate");
  });
});

document.querySelectorAll(".triangle-2").forEach((single) => {
  single.addEventListener("click", function () {
    single.nextElementSibling.nextElementSibling.classList.toggle(
      "grandchild-ul-visible"
    );
    single.classList.toggle("triangle-rotate");
  });
});

document.querySelectorAll(".triangle-3").forEach((single) => {
  single.addEventListener("click", function () {
    single.nextElementSibling.nextElementSibling.classList.toggle(
      "grandgrandchild-ul-visible"
    );
    single.classList.toggle("triangle-rotate");
  });
});
