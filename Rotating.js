const Open = document.getElementById("open");
const Close = document.getElementById("close");
const Darkmode = document.getElementById("darkmode");
const Container = document.querySelector(".container");

Open.addEventListener("click", () => Container.classList.add("show-nav"));
Close.addEventListener("click", () => Container.classList.remove("show-nav"));

//DarkMode//
Darkmode.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    Darkmode.style.color = "white";
  } else {
    Darkmode.style.color = "black";
  }
};
