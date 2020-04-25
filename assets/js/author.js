//Ucitavanje slika i slajder na author.html
img = [
    {
      src:"autor1.jpg",
      alt:"autor1"
    },{
      src:"autor2.jpg",
      alt:"autor2"
    },{
      src:"autor3.JPG",
      alt:"autor3"
    },
  ];
  $(document).ready(function($) {
    ucitajSlike();
    
    setInterval(function() {
      moveRight();
    }, 3000);
  
    var slideCount = $("#slider ul li").length;
    var slideWidth = $("#slider ul li").width();
    var slideHeight = $("#slider ul li").height();
    var sliderUlWidth = slideCount * slideWidth;
  
    $("#slider").css({ width: slideWidth, height: slideHeight });
    $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });
    $("#slider ul li:last-child").prependTo("#slider ul");
  
    function moveRight() {
      $("#slider ul").animate(
        {
          left: -slideWidth
        },
        200,
        function() {
          $("#slider ul li:first-child").appendTo("#slider ul");
          $("#slider ul").css("left", "");
        }
      );
    }
  
   
  });
  
  function ucitajSlike(){
    for(i = 0; i < img.length; i++){
      $("#images").append("<li><img class='slider_image' src='./assets/img/"+img[i].src+"' alt='"+img[i].alt+"' /></li>");
    }
  }


  //countdown na author.html

$(document).ready(function(){
    countdownInterval = setInterval(function(){
      updateCountdown();
    }, 1000);
  });
  
function updateCountdown(){
    timeNow = Date.now();
    rodjendan = new Date("Apr 4, 1998 13:30:14").getTime();
    zivim = timeNow - rodjendan;
    
var years = Math.floor(zivim / (1000 * 60 * 60 * 24) / 365);
var days = Math.floor(zivim / (24 * 60 * 60 * 1000) %365);
var hours = Math.floor((zivim % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((zivim % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((zivim % (1000 * 60)) / 1000);

    
if(zivim <= 0){
    $(".ct_god").text("0");
    $(".ct_dani").text("0");
    $(".ct_sati").text("0");
    $(".ct_minutes").text("0");
    $(".ct_seconds").text("0");
    clearInterval(countdownInterval);
} else {
    $(".ct_god").text(years);
    $(".ct_dani").text(days);
    $(".ct_sati").text(hours);
    $(".ct_minutes").text(minutes);
    $(".ct_seconds").text(seconds);
    }
  }