//JQuery fadeIn fadeOut

$("#howfarBTN").click(function(){ //JQuery libarary implementation
  $("#howfarBTN").fadeOut(); //fades out how far distance check button
});

$("#submitBTN").click(function(){ //JQuery libarary implementation
  $("#submitBTN").fadeOut();  //fades out submit form button
  $("#submitBTN").fadeIn(1000); //fade in submit form button after fading out
});


$("#menuBar").hide();
$("#menuBar").fadeIn(1000);


$("#orderBtnHome").hide();
$("#orderBtnHome").fadeIn(2000);


$("#logo").hide();
$("#logo").fadeIn(1000);


$("#orderBtn").hide();
$("#orderBtn").fadeIn(1500);

$(".slideshow-container").hide();
$(".slideshow-container").fadeIn(1500);


$("#abtPic").hide();
$("#abtPic").fadeIn(1500);

$(".main").hide()
$(".main").fadeIn(1500);

$(".iconLinks").hide();
$(".iconLinks").fadeIn(1500);


$(".mainPics").hide()
$(".mainPics").fadeIn(2000);

$(".promotion").hide()
$(".promotion").fadeIn(1500);


$("#mailingListSec").hide()
$("#mailingListSec").fadeIn(2000);


$(".mailingList").hide()
$(".mailingList").fadeIn(2000);











//JQuery see more see less
$("#cookieprice").hide();
$("#seeless").hide();  

$("#seemore").click(function(){
    $("#cookieprice").show();
    $("#seeless").show();
    $("#seemore").hide();     
  });

$("#seeless").click(function(){
    $("#cookieprice").hide();
    $("#seeless").hide();  
    $("#seemore").show();     
  });

//form validation
function validate() {
    var userName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var zip = document.getElementById("zip");
    var userPhone = document.getElementById("userPhone");
    var msg = document.getElementById("ValidateMsg");
    if (!userName.checkValidity() || !userEmail.checkValidity() || !userPhone.checkValidity() || !zip.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
    }



//get and compare user location functions
const x = document.getElementById("checkDist");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}


function showPosition(position) {
  var latDistDiffSquared = Math.pow((position.coords.latitude - 40.50578832355504),2);
  var longDistDiffSquared = Math.pow((position.coords.longitude - (-78.38691154025643)),2);
  if (Math.sqrt(latDistDiffSquared + longDistDiffSquared) > 2){  //arbitrary threshold for distance
    x.innerHTML = "You are quite far from us.";
  } else { 
    x.innerHTML = "You are pretty close to us!";
  }
}

//GoogleMap function
var L = window.location.href;
    console.log(L);
    if (L.includes("contact.html")){
        initMap();
    }


let map;

async function initMap() {
 // The location of CMU
 const position = { lat: 40.50578832355504, lng:-78.38691154025643 };
 // Request needed libraries.
 //@ts-ignore
 const { Map } = await google.maps.importLibrary("maps");
 const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
 // The map, centered at CMU
 map = new Map(document.getElementById("map"), {
   zoom: 20,
   center: position,
   mapId: "DEMO_MAP_ID",
 });
 // The marker, positioned at CMU
 const marker = new AdvancedMarkerElement({
   map: map,
   position: position,
   title: "Say It With Sweets",
 });
}



//carousel function
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}