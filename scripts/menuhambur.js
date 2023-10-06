document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuLateral = document.querySelector("#menu-lateral");

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation(); // Impede a propagação do evento para o documento
    menuLateral.style.left = "0";
  });

  document.addEventListener("click", function (event) {
    if (!menuLateral.contains(event.target) && event.target !== menuToggle) {
      menuLateral.style.left = "-300px";
    }
  });
});

