/***		 Aliases			**/
var d = document;
var $ = d.querySelector;

/** 
 * toggle display of Interactive window, minimize button & miniature window 
 */
function toggleWindow(){
	
	// toggle Inetraction window
	var IWD = $("#IW").style.display;
	IWD === "none" ? IWD = "block" : IWD = "none";
	
	// toggle minimize button
	var MBD = $("#MB").style.display;
	MBD === "none" ? MBD = "block" : MBD = "none";
	
	// toggle miniature window
	var MWD = $("#MW").style.display;
	MWD === "none" ? MWD = "block" : MWD = "none";
}

/**
 * send a request for RDV ( appointement ) 
 * @date {string} : yyyy-mm-dd hh:mm	
 */
function askForRDV( date ){
	console.log( date );
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