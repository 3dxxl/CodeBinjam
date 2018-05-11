function zeichnen () {

var contxt = $("#cv1").get(0).getContext('2d');
var rot = Math.round(Math.random()*400);
var gruen = Math.round(Math.random()*400);
var blau = Math.round(Math.random()*400);
contxt.clearRect(0,0,400,400);
contxt.fillStyle = "rgb(250,0,0)";
contxt.fillRect(10, 80, 20, rot);
contxt.fillStyle = "rgb(0,250,0)";
contxt.fillRect(40, 80, 20, gruen);
contxt.fillStyle = "rgb(0,0,250)";
contxt.fillRect(70, 80, 20, blau);
timer=setTimeout(zeichnen, 1000);
}
function messungStop(){
clearTimeout(timer);

}

$ (function() {

$("button:first").click(zeichnen);
$("button:eq(1)").click(messungStop);


});