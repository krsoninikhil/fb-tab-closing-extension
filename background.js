chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	if(request.message === "time_out"){
		chrome.tabs.query({url: ["https://www.facebook.com/*", "https://www.youtube.com/*", "https://www.twitter.com/*"]}, function(tabs){
			for (var i = 0; i < tabs.length; i++) {
				chrome.tabs.remove(tabs[i].id, function(){ } );
				console.log("matched distractions: "+tabs[i].url);
			}
		});		
	}
});