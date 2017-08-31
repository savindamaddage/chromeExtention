chrome.extension.onRequest.addListener(function(request) {
	console.log(request);
	if (request.action === "reload") {
		reload(request.loopCount, request.wait);
	}
});

function reload(loopCount, wait){
	localStorage.setItem('x', 1);
	localStorage.setItem('y', loopCount);
	localStorage.setItem('wait', wait);
	location.reload();
}

if(localStorage.getItem('x') && localStorage.getItem('y') && localStorage.getItem('wait')){
	if(parseInt(localStorage.getItem('x'))<parseInt(localStorage.getItem('y'))){
		localStorage.setItem('x', parseInt(localStorage.getItem('x'))+1);
		setTimeout(function() {
		    location.reload();
		  }, (parseInt(localStorage.getItem('x')))*1000);
	}
	else{
		localStorage.removeItem('x');
		localStorage.removeItem('y');
		localStorage.removeItem('wait');
	}
}

