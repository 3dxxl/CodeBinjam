
/*FunktionsName darf nicht click heißen, 
ist warscheinlich schon benutzt worden!!*/
function klick () {
  
  

   
   window.alert("Hallo Binjam");
   

 
}

function klick2() {
  
   window.open("https://www.google.de", "target_blank");
}



function klick3() {
  
  
var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
var URL = "https://www.linkedin.com/cws/share?mini=true&amp;url=" + location.href;
var win = window.open(URL, "_blank", strWindowFeatures);
  
}

function change() {

document.getElementById('hi').className = "MyClass";

}

