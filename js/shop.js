var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("banner-slide");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("banner-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 2 seconds
}


function drawszlider(ossz, meik) {
  var szazalek = Math.round((meik * 100) / ossz);
  document.getElementById("szliderbar").style.width = szazalek + '%';
  document.getElementById("szazalek").innerHTML = szazalek + '%';
}
