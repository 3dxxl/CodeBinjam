 function pruefen () {
var vorname = document.getElementById("vorname");
var nachname = document.getElementById("nachname");   


      if(vorname.value == ""){
      window.alert("Bitte geben Sie Ihren Vorname an");
      vorname.focus();
      return false;
      }
      
      if(nachname.value == ""){
      window.alert("Bitte geben Sie Ihren Nachnamen an");
      nachname.focus();
      return false;
      }
      }