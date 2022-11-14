const documentUrlPatterns = ["https://tolunastart-qab.com/*", "https://tolunastart-qac.com/*", "https://tolunastart-trn.com/*", "https://tolunastart.com/*", "https://project.tolunastart-qab.com/*", "https://project.tolunastart-qac.com/*", "https://project.tolunastart-trn.com/*", "https://project.tolunastart.com/*"];
const targetUrlPatterns = ["https://project.tolunastart-qab.com/wizard/build/*", "https://project.tolunastart-qac.com/wizard/build/*", "https://project.tolunastart-trn.com/wizard/build/*", "https://project.tolunastart.com/wizard/build/*"];

createContextMenuItem("Target");
createContextMenuItem("Define");
chrome.contextMenus.onClicked.addListener(onClicked);

function createContextMenuItem(name) {
    const title = `Go to ${name}`;    
    const id = chrome.contextMenus.create({ "id": name, "title": title, "contexts": ["link"], "documentUrlPatterns": documentUrlPatterns, "targetUrlPatterns": targetUrlPatterns }, () => console.log("chrome.contextMenus.create callback"));
    console.log(`Created context menu item: ${id}`);
}

function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));
}

function onClicked(info, tab) {
    const url = new URL(info.linkUrl);
    const env = url.hostname.split('.')[1];
    const surveyId = url.pathname.split('/')[3];
    switch (info.menuItemId) {
        case 'Target':
            GoToTarget(surveyId, env);
            break;
        case 'Define':
            GoToDefine(surveyId, env);
            break;
        default:
            console.log(`No support for ${info.menuItemId}`);
    }
}

function GoToTarget(surveyId, env) {
    const targetUrl = `https://projects-internal.${env}.com/Sample/target?tqssurveyid=${surveyId}`;
    chrome.tabs.create({ url: targetUrl });
}

function GoToDefine(surveyId, env) {
    const defineUrl = `https://www.${env}.com/define/${surveyId}`;
    chrome.tabs.create({ url: defineUrl });
}