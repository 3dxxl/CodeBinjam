$(function(){
        
        
        Einstellungen_laden();
        
        $('form#einstellungen').submit(function(event){
          event.preventDefault();
          Einstellungen_speichern ();
        });
      });
      
      function Einstellungen_speichern (){
        localStorage.setItem("hintergrund_farbe", $("#hintergrund_farbe").val());
        localStorage.setItem("text_farbe", $("#text_farbe").val());
        localStorage.setItem("schrift_groesse", $("#schrift_groesse").val());
        Einstellungen_anwenden ();
      }
      
      function Einstellungen_anwenden (){
        $("body").css("background-color", $("#hintergrund_farbe").val());
        $("body").css("color", $("#text_farbe").val());
        $("body").css("font-size", $("#schrift_groesse").val() + "px");
      }
      
      function Einstellungen_laden (){
        var bgcolor = localStorage.getItem("hintergrund_farbe");
        var text_color = localStorage.getItem("text_farbe");
        var text_size = localStorage.getItem("schrift_groesse");
        
        $("#hintergrund_farbe").val(bgcolor);
        $("#text_farbe").val(text_color);
        $("#schrift_groesse").val(text_size);
        
        Einstellungen_anwenden ();
      }
	  
 
 