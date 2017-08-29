
$( "#run" ).click(function() {
  chrome.extension.sendMessage({action: document.getElementById("action").value, loopCount: document.getElementById("loopCount").value},
        function (response) {
            console.log(response);
  		});
});