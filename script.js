document.getElementById("yesButton").addEventListener("click", function() {
    alert("¡Sabía que dirías que sí! ❤️ Nos vemos el 14 de febrero.");
});

document.getElementById("noButton").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});
