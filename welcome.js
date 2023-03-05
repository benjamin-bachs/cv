document.addEventListener('DOMContentLoaded', function() {
    let español = document.getElementById("español");
    español.addEventListener("click", function(){
        document.getElementById("langSelection").style.display="none"
        window.location.href = "español.html";
    });
    let ingles = document.getElementById("english");
    ingles.addEventListener("click", function(){
        document.getElementById("langSelection").style.display="none"
        window.location.href = "english.html";
    });
});