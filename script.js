$(function() {
    var bkcolor;
    var textvalue;
    $('#slider').slider({
    orientation: "vertical",
     slide: function(event, ui) {
       bkcolor = (ui.value < 35) ? '#a4b6d3' :'#b5b776';
       textvalue = (ui.value < 35) ? "Brrr..." :"That's better...";
       if (ui.value > 66) { 
         bkcolor = '#d08f8f'; 
         textvalue = 'Ouch hot!';
       } 
       $('.progressbar-cover').css('bottom' , ui.value + '%');  // the cover controls the bar height
       $('html').css('backgroundColor' , bkcolor ); // value contains the bg colour
       $('.text').html(textvalue); // text value      
     }
    });
   });
   
   $(document).ready(function() {
      $(".ui-slider-handle").text("Drag me!");
      $('#currentValue').on('input', function() {
        var currentValue = $(this).val();
        $(".ui-slider-handle").text(currentValue ? currentValue : "Drag me!");
    });
    $('#goalValue').on('input', function() {
        var goalValue = $(this).val();
        $(".goalDisplay").text("Goal: " + (goalValue ? goalValue : "--"));
    });
   });