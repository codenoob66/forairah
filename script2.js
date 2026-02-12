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

  setTimeout(typeWriter, 2000);
});
