$(function(){
	$('.carousel').carousel({
		interval: false
	});
	
	$('#carousel').elastislide({
		minItems : 1
	});
	$('#slide-item').elastislide({
		minItems : 1
	});
	
	$( ".search input" )
	  .focusout(function() {
		$( ".see-on" ).removeClass( "line" );
	  })
	  .focus(function() {
		$( ".see-on" ).addClass( "line" );
	  });
});
