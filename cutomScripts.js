/***		 Aliases			**/
var d = function(){
	return document;
}

var $ = function( sel ){
	return document.querySelector( sel );
}

/** 
 * toggle display of Interactive window, minimize button & miniature window 
 */
function toggleWindow(){
	
	// toggle Inetraction window
	var IWD = $("#IW");
	IWD.style.display=== "none" ? IWD.style.display = "block" : IWD.style.display = "none";
	
	// toggle minimize button
	var MBD = $("#CB");
	MBD.style.display === "none" ? MBD.style.display = "block" : MBD.style.display = "none";
	
	// toggle miniature window
	var MWD = $("#MW");
	MWD.style.display === "none" ? MWD.style.display = "block" : MWD.style.display = "none";
}

/**
 * return an array of { day , time } objects
 */
function getDates(){
	
	// init empty DATES arrays
	var DATES = [];
	
	// select open dates elements
	var d = document.querySelectorAll('.dispo');
	
	// loop through encountered open dates elements
	d.forEach( function( item, i ){
		
		var day = item.parentNode.innerText.split(' ')[0]; // grab day
		var time = item.innerText; // grab time
		
		// populate DATES array
		DATES.push({
			date: day,
			time: time
		}); 
	});
	
	
	return DATES;
}

/**
 * send a request for RDV ( appointement ) 
 * @date {string} : yyyy-mm-dd hh:mm	
 */
function askForRDV( e ){
	console.log( e.target.innerText );
}

/**
 * send an ajax request within the page
 * @date {string} : yyyy-mm-dd hh:mm
 * @target {string} : endpoint 
 */
function ajaxPost( target, date ){
	
	//  grab url 
	var url = window.location.href;
	
	// grab user Id from current url
	// this only works when user is connected as the id is the parameter 
	var userId = url.substr( url.indexOf('=')+1, url.length-1 );

	// grab secret id from window scope
	var secretId = secretId;
	
	// create form data to send 
	var FD = newformData();
	
	// set target url 
	var targetUrl = window.location.hostname + target;
	
	// forge the form
	FD.append( "f_id", "" );
	FD.append( "fg_id", userId );
	FD.append( "what", "book_appointement" );
	FD.append( "result", date );
	FD.append( "Sid", secretId );
	
	// forge a request
	var req = new XMLHttprequest();
		req.open( "POST", targetUrl );
		req.send( form );
		
}