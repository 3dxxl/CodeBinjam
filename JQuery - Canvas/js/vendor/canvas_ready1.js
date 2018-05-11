function zeichnen () {

var contxt = $("#cv1").get(0).getContext('2d');
var rot = $("input:first").val();
var gruen = $("input:eq(1)").val();
var blau = $("input:last").val();
contxt.clearRect(0,0,400,400);
contxt.fillStyle = "rgb(250,0,0)";
contxt.fillRect(10, 80, 20, rot);
contxt.fillStyle = "rgb(0,250,0)";
contxt.fillRect(40, 80, 20, gruen);
contxt.fillStyle = "rgb(0,0,250)";
contxt.fillRect(70, 80, 20, blau);
}
$( function() {
zeichnen();
$("input").change(zeichnen);
});