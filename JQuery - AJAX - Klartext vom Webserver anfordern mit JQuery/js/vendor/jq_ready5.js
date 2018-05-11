$(function(){
  $("button:first").click(function(){
    $.get("../zitat/zitat1.txt", function(data){
      $("footer:first").html(data);
    });
  });
  $("button:eq(1)").click(function(){
    $.post("../zitat/zitat2.txt", function(data){
      $("footer:first").html(data);
    });
  });
});
