$( function() {
$("label").css({ borderStyle: "solid", borderWidth:"1pt", 
textAlign:"center",
borderRadius:"5px", boxShadow: "3px 3px 3px #777", 
display:"inline-block", width:"100px",
marginRight:"20px", marginBottom:"10px" });
$("aside").css({
 float:"right", color:"red"
 });
$("#btn").click( function() {
var korrekt = true;
if($("#name").val()=="") {
korrekt = false;
$("aside:first").html("Das Feld muss gefüllt werden.");
} else {
$("aside:first").html("");
}
if($("#vorname").val()=="") {
korrekt = false;
$("aside:eq(1)").html("Das Feld muss gefüllt werden.");
} else {
$("aside:eq(1)").html("");
}
if(korrekt) {
$("form:first").submit();
}
return korrekt;
});
})