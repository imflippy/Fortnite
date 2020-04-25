// Array sa slikama i alt
imgs = ["g6.jpg","g7.jpg", "g8.jpg", "g9.jpg",  "g10.jpg", "g11.jpg", "g12.jpg", "g13.jpg", "g14.jpg", "g15.jpg", "g16.jpg", "g17.jpg", "g18.jpg", "g19.jpg", "g20.jpg", "g21.jpg", "g22.jpg", "g23.jpg", "g24.jpg", "g25.jpg"];
alt =  ["Skin6","Skin7", "Skin8", "Skin9", "Skin10", "Skin11", "Skin12", "Skin13", "Skin14", "Skin15","Skin16", "Skin17", "Skin18", "Skin19", "Skin20","Skin21", "Skin22", "Skin23",  "Skin24", "Skin25"];

// Selector za galleriju
galleryContainer = document.getElementById("gallerija");

// Loop da napuni galleriju
for(i=0; i < imgs.length; i++){
    galleryContainer.innerHTML += "<div class='imgBox'><img class='gImg' alt='"+alt[i]+"' src='./assets/img/"+imgs[i]+"'/></div>";
}
$(document).ready(function(){
//klik na slike gallery.html
$(".gImg").on("mouseenter", function(){
    $(this).css({
        "cursor":"pointer",
        "filter": "brightness(80%)"
    })
}).on("mouseleave", function(){
    $(this).css({
        "cursor":"default",
        "filter": "brightness(100%)"
    })
});
// Regulisanje od preview slike

    $(".gImg").on("click", function(){
        mySrc = $(this).attr("src");
        $("#preview").html("<img class='' src='"+mySrc+"'/><div id='closePreview'>X</div>");

        $("#preview").fadeIn(500);
        $("#overlay").fadeIn(500);
    });

    $(document).on("click", "#closePreview", function(){
        $("#preview").fadeOut(500);
        $("#overlay").fadeOut(500);
    });
});


//Skroll na pocetak strane

window.onscroll = function() {skrolovanje()};

function skrolovanje() {
    if (document.documentElement.scrollTop < 17) {
        document.getElementById("scrollTop").style.display = "none";
    } else {
        document.getElementById("scrollTop").style.display = "block";
    }
}

$("#scrollTop").click(function(){
    document.documentElement.scrollTop = 0;
});