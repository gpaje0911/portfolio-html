var radios = document.querySelectorAll('[type=radio]');

radios.forEach(function(radio) {
  radio.addEventListener('change', function() {
    var tab = document.querySelector('.tab.active');
    if (tab) {
      tab.classList.remove('active');
    }
    var checkedRadio = document.querySelector('[type=radio]:checked');
    checkedRadio.parentNode.classList.add('active');
  });
});

// Image Gallery
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// for ticker

var ticker = document.querySelector('.ticker');
  var tickerText = ticker.querySelector('span');
  var tickerTextWidth = tickerText.offsetWidth;
  var tickerWidth = ticker.offsetWidth;
  var startPosition = -tickerTextWidth;
  var position = startPosition;
  var animationFrame;
  
  function animateTicker() {
    position++;
    if(position >= tickerWidth) {
      position = startPosition;
    }
    tickerText.style.transform = 'translateX(' + position + 'px)';
    animationFrame = window.requestAnimationFrame(animateTicker);
  }
  
  animateTicker();