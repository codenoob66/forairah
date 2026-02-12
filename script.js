const audio = document.getElementById("bgMusic");
const loginBtn = document.getElementById("loginBtn");
const birthdateInput = document.getElementById("birthdate");

function startMusic() {
  audio.play().catch((err) => console.log("Audio play failed:", err));
  document.removeEventListener("click", startMusic);
  const clickMessage = document.getElementById("clickToPlay");
  if (clickMessage) {
    clickMessage.style.display = "none";
  }
}

document.addEventListener("click", startMusic);

loginBtn.addEventListener("click", () => {
  const selectedDate = birthdateInput.value;

  if (!selectedDate) {
    alert("Please select a date first!");
    return;
  }

  // Example validation: Change '2000-01-01' to the actual birthdate
  if (selectedDate === "1996-12-13") {
    location.href = "iloveyou.html";
    // You can redirect here: window.location.href = 'home.html';
  } else {
    alert("Wrong date! Sucks to be you.");
  }
});

(() => {
  const layer = document.getElementById("hearts-layer");
  if (!layer) return;

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  // If user prefers reduced motion, don't animate
  if (prefersReduced) return;

  const HEARTS = ["💖", "💗", "💘", "❤️", "💕"];
  const rand = (min, max) => Math.random() * (max - min) + min;

  function spawnHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];

    const x = rand(0, window.innerWidth);
    const size = rand(14, 34);
    const fallDuration = rand(3.5, 7.5); // seconds
    const swayDuration = rand(1.2, 2.8);

    heart.style.left = `${x}px`;
    heart.style.fontSize = `${size}px`;
    heart.style.opacity = `${rand(0.5, 1)}`;

    heart.style.animationDuration = `${fallDuration}s, ${swayDuration}s`;
    heart.style.filter = `drop-shadow(0 2px 2px rgba(0,0,0,0.15))`;

    layer.appendChild(heart);

    // Cleanup after falling finishes
    setTimeout(() => heart.remove(), (fallDuration + 0.2) * 1000);
  }

  // spawn rate: adjust for more/less hearts
  const intervalMs = 180; // smaller = more hearts
  const timer = setInterval(spawnHeart, intervalMs);

  // Optional: stop after some time (uncomment)
  // setTimeout(() => clearInterval(timer), 15000);
})();
