function switchPages() {
  var aboutPage = document.getElementById("about");
  var workPage = document.getElementById("work");
  var switcher = document.getElementById("switcher");

  if (workPage.style.display === "none") {
    workPage.style.display = "flex";
    aboutPage.style.display = "none";
    switcher.style.justifyContent = "flex-end";
  } else {
    workPage.style.display = "none";
    aboutPage.style.display = "flex";
    switcher.style.justifyContent = "flex-start";
  }
}
