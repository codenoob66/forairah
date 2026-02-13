document.querySelector(".heart").addEventListener("mousemove", (e) => {
  const particles = document.createElement("div");
  particles.className = "particle";
  particles.style.left = e.clientX + "px";
  particles.style.top = e.clientY + "px";

  const colors = ["#ff3a7f", "#ff0a6c", "#ff6b9e", "#ff9ec4"];
  particles.style.background =
    colors[Math.floor(Math.random() * colors.length)];

  const size = Math.random() * 15 + 5;
  particles.style.width = size + "px";
  particles.style.height = size + "px";

  particles.style.setProperty("--random-x", Math.random() * 2 - 1);
  particles.style.setProperty("--random-y", Math.random() * 2 - 1);

  document.body.appendChild(particles);

  setTimeout(() => {
    particles.remove();
  }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const typewriterElement = document.getElementById("typewriter-output");
  const textToType = typewriterElement.textContent;

  typewriterElement.textContent = ""; // 🔥 clear it first

  let i = 0;

  function typeWriter() {
    if (i < textToType.length) {
      typewriterElement.textContent += textToType.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    } else {
      noBtn.style.display = "";
      yesBtn.style.display = "";
    }
  }

  let count = 0;

  yesBtn.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    const imageContainer = document.getElementById("image-container");

    music.play();
    imageContainer.style.setProperty("display", "flex", "important");
    typewriterElement.innerHTML =
      "Yey! 💖 Here are two cute pictures of us langga, <br> I love you.";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 10000,
      colors: ["#ff3a7f", "#ff0a6c", "#ff6b9e", "#ff9ec4", "#ffffff"],
    };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  });

  function noCount() {
    noBtn.addEventListener("click", () => {
      count++;
      if (count == 1) {
        alert("try again!");
      } else if (count == 2) {
        alert("no!");
      } else {
        alert("ay nlg uy!, d jd ko nmo lab ");
      }
    });
  }

  noCount();

  setTimeout(typeWriter, 2000);
});
