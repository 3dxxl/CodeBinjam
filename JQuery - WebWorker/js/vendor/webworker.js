var ww=null;
$(function(){
$("#b1,#b2").resizable();
$("button:first").click( function() {
ww = new Worker("js/vendor/bgwork.js");
ww.onmessage = function(ev) {
$("#a1").html(ev.data);
}
});
$("button:eq(1)").click(function() {
if(ww!=null) ww.terminate();
$("#a1").html("Ende Web Worker");
});
$("button:eq(2)").click( function() {
$("#a2").html("Zufallszahl: "+Math.random());
}
);
});