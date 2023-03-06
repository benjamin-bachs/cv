document.addEventListener('DOMContentLoaded', function() {
    let español = document.getElementById("spanish");
    español.addEventListener("click", function(){
        window.location.href = "spanish.html";
    });
    let ingles = document.getElementById("english");
    ingles.addEventListener("click", function(){
        window.location.href = "english.html";
    });
    var menubutton = document.getElementById("language-button");
    var menu = document.getElementById("menu");
    menubutton.addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    })
})