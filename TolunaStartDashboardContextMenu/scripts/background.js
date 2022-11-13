createContextMenuItem("Target");
createContextMenuItem("Define");
chrome.contextMenus.onClicked.addListener(genericOnClick);

function createContextMenuItem(name) {
    var title = `Go to ${name}`;
    var documentUrlPatterns = ["https://developer.chrome.com/docs/extensions/*"];
    var targetUrlPatterns = ["https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/"];
    var id = chrome.contextMenus.create({ "id": name, "title": title, "contexts": ["link"], "documentUrlPatterns": documentUrlPatterns, "targetUrlPatterns": targetUrlPatterns }, () => console.log("callback"));
    console.log(id);
}

function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
}