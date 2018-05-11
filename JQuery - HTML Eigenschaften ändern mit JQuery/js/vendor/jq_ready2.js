$( function(){

$("header:first").html("Zugriff mit HTML()");
$("section:eq(2)").html("Neuer Inhalt in der dritten Sektion");

$("section:eq(3)").html("<h2>Neuer Inhalt in der vierten Sektion</h2>").css({
borderStyle: "solid", borderWidth:"1pt", 
textAlign:"center",
borderRadius:"5px", boxShadow: "3px 3px 3px #777"
});
$("footer:last").html("Mit jQuery geändert");

}/*funktion geschlossen*/
)/*jquery geschlossen*/

/*section:eq(2)" mit eq(2) wähle ich den dritten section eintrag aus, also
mit eq(1) würde ich den zweiten auswählen */