function menu() {
    var navLiens = document.getElementById("liens");
    var buttonMenu = document.querySelector('.menu-button i');

    if (navLiens.classList.contains('show')) {
        navLiens.classList.remove('show');
        buttonMenu.classList.remove('fa-times');
        buttonMenu.classList.add('fa-bars');
    } else {
        navLiens.classList.add('show');
        buttonMenu.classList.remove('fa-bars');
        buttonMenu.classList.add('fa-times');
    }
}