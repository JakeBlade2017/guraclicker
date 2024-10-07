window.addEventListener("load", function() {
    setTimeout(function open(event) {
        document.querySelector(".popup").style.display = "block";
    }, 1000);
    
    const closeButton = document.querySelector(".close-btn");
    if (closeButton) {
        closeButton.addEventListener("click", function() {
            document.querySelector(".popup").style.display = "none";
            document.getElementById("bgMusic").play();
        });
    }
});