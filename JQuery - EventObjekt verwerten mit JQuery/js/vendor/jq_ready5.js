$( function() {
$("img").css({width:"400px"});
$("aside").css({ fontSize:"42px", float:"right", 
color:"red" });
$("#b1").click(function(ev){
$("#ausgabe1").html("Zeitstempel: " + ev.timeStamp + 
"<br />screenY: " + ev.screenY +
", screenX: " +
 ev.screenX);
});
$("#b2").mousemove(function(ev){
var seitenKoordinaten = "( " + ev.pageX + ", " + 
ev.pageY + " )";
$("#ausgabe2").html("e.pageX, e.pageY: " + 
seitenKoordinaten +
"<br />Auslösender Knoten: " +
 ev.target.nodeName);
});
$("#b2").mouseout(function(ev){
$("#ausgabe2").html("Verbundener Knoten: " + 
ev.relatedTarget.nodeName);
});
}/*Funktion geschlossen*/
)/*JQuery geschlossen*/

$(function(){


$("#klick").on('mouseenter', function(){
     window.location = "http://www.google.com/";
});

})