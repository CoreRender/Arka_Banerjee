// Scroll to About
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

// Typing Effect
const text = "Web Builder";
let i = 0;

function typing() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}

document.querySelector(".typing").innerHTML = "";
typing();
