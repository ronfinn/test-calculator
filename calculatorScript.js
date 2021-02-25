// Clears the screen on click of C button.
function clearScreen() {
  document.getElementById("result").value = "";
}
// Displays entered value on screen.
function liveScreen(value) {
  document.getElementById("result").value += value;
}
// Swaps the style sheet in order to  achieve dark mode.
function switchTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "lightTheme.css") {
    theme.href = "darkTheme.css";
    darkMode.innerHTML = "Light Mode 🌞";
  } else {
    theme.href = "lightTheme.css";
    darkMode.innerHTML = "Dark Mode 🌙";
  }
}
