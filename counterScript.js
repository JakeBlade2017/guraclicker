let counter = 5; // Obviously is the counter variable
let isClickProcessing = false; // This is for click delay
let colorInterval; // Used for random colors

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active")
}

document.addEventListener('DOMContentLoaded', function() {
  /* Images */
  const GawrGura = document.getElementById("GawrGura");
  const dancinGura = document.getElementById("DancinGura");

  /* Audio */
  const soundEffect = document.getElementById("plushSound");
  const aSound = document.getElementById("aGura");
  const bgMusic = document.getElementById("bgMusic");
  const dancinMusic = document.getElementById("dancinMusic");

  GawrGura.addEventListener("click", function() {
    if (!isClickProcessing && counter > 0) { // Check if the counter is greater than 0
      isClickProcessing = true;
      setTimeout(function() {
        counter = counter - 1;
        if (counter > 0) {
          document.getElementById("txtCounter").innerHTML = counter + " times left!";
        } else {
          document.getElementById("txtCounter").innerHTML = "No more clicks left! Enjoy your surprise! :D";
          soundEffect.volume = 0;

          setTimeout(function() {
            bgMusic.pause()
            aSound.play();
            GawrGura.style.display = "none";
          }, 3000); // 3 second (Basically is 3... 2... 1... ¡Pop!)

          setTimeout(function() {
            dancinMusic.play()
            dancinGura.style.opacity = 1;

            setTimeout(function(){
              colorInterval = setInterval(() => {
                document.body.style.backgroundColor = getRandomColor();
              }, 1000); // Change background color every second (theorically a beat)
            }, 31435) // 31.435 seconds (Where song beat starts)
          }, 5000); // 5 second (why I added this?, that's why you should comment the functionality of the code lines)

          dancinMusic.addEventListener("ended", function(){
            location.reload(); // Reloads website when finishes the showtime!
          })
        }
        isClickProcessing = false;
      }, soundEffect.duration * 1000); // Just the sound effect duration multiplied by 1000 to convert it to milliseconds
    }
  });
});

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}