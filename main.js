document.addEventListener('DOMContentLoaded', function() {
    var menubutton = document.getElementById("menubutton");
    var menu = document.getElementById("menu");
    menubutton.addEventListener("click", function() {
        console.log("Que tu me hiciste");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    })
})