document.addEventListener("DOMContentLoaded", function() {

    var abrirMenu = document.getElementById("abrir-menu");
    var fecharMenu = document.getElementById("fechar-menu");
    var menuLateral = document.getElementById("menu-lateral");

    abrirMenu.addEventListener("click", function(evento) {
        evento.preventDefault();
        menuLateral.classList.add("ativo"); // Adiciona a classe que mostra o menu
    });

    fecharMenu.addEventListener("click", function() {
        menuLateral.classList.remove("ativo"); // Remove a classe e esconde o menu
    });

});