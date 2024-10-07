let counter = 100;
let isClickProcessing = false;
let colorInterval;

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
          document.getElementById("txtCounter").innerHTML = "No more clicks left!";
          soundEffect.volume = 0;

          setTimeout(function() {
            bgMusic.pause()
            aSound.play();
            GawrGura.style.display = "none";
          }, 2000); // 2 second

          setTimeout(function() {
            dancinMusic.play()
            dancinGura.style.opacity = 1;

            setTimeout(function(){
              colorInterval = setInterval(() => {
                document.body.style.backgroundColor = getRandomColor();
              }, 1000);
            }, 31435)
          }, 5000); // 5 second

          dancinMusic.addEventListener("ended", function(){
            location.reload();
          })
        }
        isClickProcessing = false;
      }, 262);
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