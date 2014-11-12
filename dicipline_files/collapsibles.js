//------------- COLLAPSIBLE CONTENT AREAS ---------------------//
/* 
Functions and event handlers for collapsible content areas. Clicking on the header will collpse/show the content area below.

Dependencies 	jQuery (tested with 1.7.2)

VERSION 		1.0 
AUTHOR			Tom Hook - Loughborough University
*/

$(document).ready(function(){
	
	//Hide all collapsible regions to start with
	$('div.collapsible > .collapsible-content').toggle();
	$('div.collapsible > .collapsible-control').removeClass('expanded');
	
	
    	// ---- CLICK HANDLER FOR INDIVIDUAL COLLAPSIBLES ----
	$('div.collapsible > .collapsible-control').click(function(event){
		//A collpapsiable control has been clicked on
          	$(this).toggleClass('expanded');
        	$(this).siblings('.collapsible-content').slideToggle('fast');  
          	event.preventDefault();
	});

	
	// CLICK HANDER FOR 'EXPAND ALL' control
	$('#collapsible-expandAll').click(function(){
		$('div.collapsible > .collapsible-control').addClass('expanded');
		$('div.collapsible > .collapsible-content').slideDown();
		return false;
	});
	
	// CLICK HANDLER FOR 'COLLAPSE ALL' control
	$('#collapsible-collapseAll').click(function(){
		$('div.collapsible > .collapsible-control').removeClass('expanded');
		$('div.collapsible > .collapsible-content').slideUp();
		return false;
	});	
});