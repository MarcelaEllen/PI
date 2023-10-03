document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuLateral = document.querySelector("#menu-lateral");
    const fecharMenu = document.querySelector("#fechar-menu");
  
    menuToggle.addEventListener("click", function () {
      menuLateral.style.left = "0";
    });
  
    fecharMenu.addEventListener("click", function () {
      menuLateral.style.left = "-300px";
    });
  });