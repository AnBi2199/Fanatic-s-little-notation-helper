// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  console.log("CLICKED");
  chrome.tabs.executeScript(tab.id, {
		file: "content.js"
	}, function () { // Execute your code
		console.log("Script Executed .. "); // Notification on Completion
	});
});
