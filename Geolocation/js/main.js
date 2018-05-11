 function finde_mich (){		 
        navigator.geolocation.getCurrentPosition(function(position) { 
      	  zeigePosition (position.coords.latitude, position.coords.longitude);
        }); 
     
        var zeigePosition = function(breite, laenge){
        var markierung = "&markers=color:red|label:Y|" + breite + "," + laenge;
        var bild = $("#karte");      
        var quelle = bild.attr("src") + markierung;
        quelle = quelle.replace("sensor=false", "sensor=true");
        bild.attr("src", quelle);
        };    
		};