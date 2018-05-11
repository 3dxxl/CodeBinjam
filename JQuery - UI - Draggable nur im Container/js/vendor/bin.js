// Write JavaScript here 

$(function() {
  
  
  $("#lw, #lw2").draggable();
    containment: "parent"

    // Getter
var containment = $( "#lw, #lw2" ).draggable( "option", "containment" );
 
// Setter
$( "#lw, #lw2" ).draggable( "option", "containment", "parent" );
  
})