/***		 Aliases			**/
var $a = function( sel ){
	return document.querySelector( sel );
}



var ModalExist = false;

/** 
 * toggle display of Interactive window, minimize button & miniature window 
 */
function toggleWindow(){
	
	// toggle Inetraction window
	var IWD = $a("#IW");
	IWD.style.display=== "none" ? IWD.style.display = "block" : IWD.style.display = "none";
	
	// toggle minimize button
	var MBD = $a("#CB");
	MBD.style.display === "none" ? MBD.style.display = "block" : MBD.style.display = "none";
	
	// toggle miniature window
	var MWD = $a("#MW");
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
		var clickAttr = item.getAttribute("onclick"); // get onclick value as string
		var timeStamp = clickAttr.match(/timestamp= (.*?) &/)[1];
		var sKey = clickAttr.match(/skey= (.*?) &/)[1];
		
		// populate DATES array
		DATES.push({
			date: day,
			time: time,
			timeStamp: timeStamp
			sKey: sKey
		}); 
	});
	
	
	return DATES;
}

/**
 * send a request for RDV ( appointement ) 
 * @date {string} : yyyy-mm-dd hh:mm	
 */
function askForRDV(){
	
	//displayConfirmModal( event.target.innerText );
	
	//ajaxCall("ajax_form_status", ajaxCall("ajax_form_status", "https://fr.tlscontact.com/dz/ORN/action.php?process=multiconfirm&what=book_appointment&fg_id=5108243&result="+event.target.innerText+"&issuer_view=dzORN2fr");
	
	displayConfirmModal( event.target.innerText ); 
}

function displayConfirmModal( date ){
	
	//  grab url 
	var url = window.location.href;
	
	// grab user Id from current url
	// this only works when user is connected as the id is the parameter 
	var userId = url.substr( url.indexOf('=')+1, url.length-1 );

		
	if( !ModalExist ){
		
		var con = document.createElement("div");
		con.setAttribute( "id", "ccff");
		
		document.body.appendChild(con);
			
		var f = document.createElement('form');
			f.setAttribute( "method", "post");
			f.setAttribute( "action", "https://fr.tlscontact.com/dz/ORN/action.php");
			f.setAttribute( "name", "ajax_confirm_action");
			f.setAttribute( "id", "ajax_confirm_action");
			f.setAttribute( "onsubmit", "ajaxPostForm(this, &quot;multiconfirm&quot;, true); return false;");
			
		con.appendChild(f);
		
		var f_id = document.createElement("input");
			f_id.setAttribute( "type", "hidden");
			f_id.setAttribute( "name", "f_id");
			f_id.setAttribute( "id", "f_id");
			f_id.setAttribute( "value", "" );
			
		f.appendChild(f_id);
		
		var fgid = document.createElement("input");
			fgid.setAttribute( "type", "hidden");
			fgid.setAttribute( "name", "fg_id");
			fgid.setAttribute( "id", "fg_id");
			fgid.setAttribute( "value", userId );
			
		f.appendChild(fgid);
		
		var what = document.createElement("input");
			what.setAttribute( "type", "hidden");
			what.setAttribute( "name", "what");
			what.setAttribute( "id", "what");
			what.setAttribute( "value", "book_appointment");
			
		f.appendChild(what);
		
		var rslt = document.createElement("input");
			rslt.setAttribute( "type", "hidden");
			rslt.setAttribute( "name", "result");
			rslt.setAttribute( "id", "result");
			rslt.setAttribute( "value", date);
			
		f.appendChild(rslt);
		
		var auid = document.createElement("input");
			auid.setAttribute( "type", "hidden");
			auid.setAttribute( "name", "as_u_id");
			auid.setAttribute( "id", "as_u_id");
			auid.setAttribute( "value", "");
			
		f.appendChild(auid);
		
		
		var _sid = document.createElement("input");
			_sid.setAttribute( "type", "hidden");
			_sid.setAttribute( "name", "_sid");
			_sid.setAttribute( "id", "_sid");
			_sid.setAttribute( "value", secret_id);
			
		f.appendChild(_sid);
		
		var timestamp = document.createElement('input');
			timestamp.setAttribute( "type", "hidden");
			timestamp.setAttribute( "name", "timestamp");
			timestamp.setAttribute( "id", "timestamp");
			timestamp.setAttribute( "value", 1537327084.7174);
			
		f.appendChild(timestamp);
		
		var skey = document.createElement('input');
			skey.setAttribute( "type", "hidden");
			skey.setAttribute( "name", "skey");
			skey.setAttribute( "id", "skey");
			skey.setAttribute( "value", 1537327084.7174);
			
		f.appendChild(timestamp);
		
		var conf = document.createElement("input");
			conf.setAttribute( "type", "submit");
			conf.setAttribute( "id", "ajaxConfirmCall_submit");
			conf.setAttribute( "value", "Confirmer");
			
		f.appendChild(conf);
		
		$a("#ajaxConfirmCall_submit").style.padding = "15px 6px";
		$a("#ajaxConfirmCall_submit").style.cursor = "pointer";
		$a("#ajaxConfirmCall_submit").style.fontWeight = "600";
		$a("#ajaxConfirmCall_submit").style.color = "white";
		$a("#ajaxConfirmCall_submit").style.background = "green";
		$a("#ajaxConfirmCall_submit").style.textAlign = "center";
		$a("#ajaxConfirmCall_submit").style.margin = "0 auto";
		$a("#ajaxConfirmCall_submit").style.width = "270px";
		
		var cbtn = document.createElement("div");
			cbtn.setAttribute( "id", "cancelBtn");
			cbtn.textContent = "Cancel";
			
		con.appendChild(cbtn);
			
		$a("#cancelBtn").style.padding = "15px 6px";
		$a("#cancelBtn").style.cursor = "pointer";
		$a("#cancelBtn").style.fontWeight = "600";
		$a("#cancelBtn").style.color = "white";
		$a("#cancelBtn").style.background = "black";
		$a("#cancelBtn").style.textAlign = "center";
		$a("#cancelBtn").style.margin = "0 auto";
		$a("#cancelBtn").style.width = "250px";
		
		$a("#cancelBtn").addEventListener( "click", function(){
			
			$a("#ccff").style.display = "none";
		});
			
			
			
		f.appendChild(_sid);
		
		// add styling
		$a("#ccff").style.zIndex = 10002;
		$a("#ccff").style.margin = "auto";
		$a("#ccff").style.display = "inline-block";
		$a("#ccff").style.position = "fixed";
		$a("#ccff").style.top = 0;
		$a("#ccff").style.left = 0;
		$a("#ccff").style.width = "100%";
		$a("#ccff").style.height = "100%";
		$a("#ccff").style.background = "#80808069";
		
		ModalExist = true;
		
	}
	
	else{
		
		$a("#ccff").style.display = "block";
		
		$a("#result").value = date;
	}
	

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
	var FD = new FormData();
	
	// set target url 
	var targetUrl = "https://"+window.location.hostname+"/dz/ORN/" + target;
	
	// forge the form
	FD.append( "f_id", "" );
	FD.append( "fg_id", userId );
	FD.append( "what", "book_appointement" );
	FD.append( "result", date );
	FD.append( "Sid", secretId );
	
	// forge a request
	var req = new XMLHttpRequest();
		req.open( "POST", targetUrl );
		
		req.onreadystatechange = function(){
			if( req.readyState === 4 && req.status === 200 )
				alert( req.response );
			
		}
		
		req.onerror = function(){
			alert("server didn't respond to request please try again");
		}
		
		req.send( FD );
}