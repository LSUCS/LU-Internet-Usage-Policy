// JavaScript Document




// Tab style navigation

jQuery(function () {
    var path = location.pathname; //return /portfolio/newish/index.html
    path = path.substring(path.lastIndexOf('/') + 1); //will return index.html

    if (path) {
        jQuery('#ittab a[href$="' + path + '"]').addClass('selected');
    }
});


 
 







// Collapsible panels script (just jquery)


$(document).ready(function(){

	//Hide (Collapse) the toggle containers on load
	$(".toggle_container").hide(); 

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	$("h5.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	});
	$("h4.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	});

});



// Tabs (just jquery)

$(document).ready(function() {

	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});

});



// Slider script (jquery - cycle)

	// Slideshow
	$(document).ready(function(){
		$('.ppics').cycle({ 
			prev:   '#pprev',
			next:   '#pnext',
			fx:      'fade', 
			speed:	  500, 
			timeout:  4000,
			random:   1
		});
	});			

