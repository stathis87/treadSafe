let myVar;

function loadPage() {
  myVar = setTimeout(showPage, 1900);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allPage").style.display = "block";
}