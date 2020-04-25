//Ucitan Nav meni koji se nalazi na svakoj strani sajta
window.onload = function(){
    var ispis = "<ul>";
    var nizlista = ["<li><a href='index.html'>Home</a></li>",
     "<li><a href='play.html'>Play</a></li>",
     "<li><a href='gallery.html'>Skins</a></li>",
     "<li><a href='author.html'>Author</a></li>",
      ];

    for(var j=0; j<nizlista.length; j++){
        
            ispis+=nizlista[j];};
    ispis+="</ul>";
    document.getElementById("myNav").innerHTML = ispis;


    }


