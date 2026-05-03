// Cursor movement
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Close popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
