window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 120) {
    document.getElementById("headerAsider").style =
      "background-color: rgba(0, 0, 0, 0.9)";
  } else {
    document.getElementById("headerAsider").style =
      "background-color: rgba(0, 0, 0, 0.4)";
  }
});
