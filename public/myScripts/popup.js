
$( "#run" ).click(function() {
  chrome.extension.sendMessage({action: document.getElementById("action").value, loopCount: document.getElementById("loopCount").value, wait: document.getElementById("wait").value},
        function (response) {
            console.log(response);
  		});
});